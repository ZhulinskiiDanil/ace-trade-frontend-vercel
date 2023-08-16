'use client';
import { env } from "@/shared/funcs/env"
import { IRequestMethod } from "../types"
import { listeners } from "./listeners"

export interface IRequestProps {
  query?: { [key: string]: any }
  body?: { [key: string]: any }
  headers?: { [key: string]: any }
}

const InternalServerError = () => ({
  isFrontEndError: true,
  statusCode: 500,
  message: "Internal Server Error"
})

const BadRequestError = () => ({
  isFrontEndError: true,
  statusCode: 400,
  message: "Bad Request"
})

const serialize = function(obj: any, prefix?: any): any {
  const str = [];

  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }

  return str.join("&");
}

export async function request<T = any>(
  url: string,
  method: IRequestMethod = "GET",
  props?: IRequestProps
): Promise<T | null> {
  listeners.onStatus({ status: "pending" })
  
  const headersRewrite = props?.headers?.["Content-Type"] === "rewrite"
  const body = props?.body ? (
    headersRewrite ? props?.body : JSON.stringify(props?.body)
  ) : null
  
  if (headersRewrite) {
    delete props?.headers?.["Content-Type"]
  }
  
  const headers = {...(!headersRewrite ? {
    "Content-Type": "application/json"
  } : {}), ...(props?.headers || {})}
  const query = serialize(props?.query)

  const baseUrl = process.env.NEXT_PUBLIC_SERVER_REST_API || ""
  
  const parsedUrl = url.startsWith("/") ? url : `/${url}`
  const requestUrl = `${baseUrl}${parsedUrl}?${query}`

  let response: any | T = await fetch(requestUrl, {
    method, headers, body: body as any
  }).catch(err => {
    listeners.onStatus({ status: "rejected" })
    listeners.onError(BadRequestError())
  })

  try {
    if (headers["Content-Type"] !== "application/json") {
      response = await response.text()
      listeners.onStatus({ status: "fulfilled" })
    } else {
      response = await response.json()
      listeners.onStatus({ status: "fulfilled" })
    }
  } catch(err) {
    listeners.onStatus({ status: "rejected" })
    listeners.onError(BadRequestError())
  }

  return response
}