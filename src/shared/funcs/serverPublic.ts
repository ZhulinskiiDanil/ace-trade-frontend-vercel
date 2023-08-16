import { env } from "./env"

export function serverPublic(str: string) {
  return env("SERVER_REST_API") + (str.startsWith("/") ? str : `/${str}`)
}