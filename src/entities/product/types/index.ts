import { IUser } from "@/entities/user/types"

export type ICurrency = "RUB" | "UAH" | "USD"

export enum ProductPlatform {
  "EPICGAMES", "STEAM"
}

export interface IPlatform {
  value: ProductPlatform,
  image: string
  name: string
}

export interface IGame {
  id: string
  name: string
  image: string
}

export interface IProductItem {
  id: string
  title: string
  description: string
  images: string[] | null
  game: IGame
  
  isMain: boolean
}

export interface IProduct {
  id: string

  deletedAt: string | null
  createdAt: string | null
  updatedAt: string | null
  bumpedAt: string | null
  soldAt: string | null

  author: IUser
  buyer: IUser | null

  platform: ProductPlatform
  price: number
  currency: ICurrency
  
  views: number

  items: IProductItem[]
}