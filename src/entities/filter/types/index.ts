import { IGame, IPlatform } from '@/entities/product/types'

export interface IPrice {
  min: number | null
  max: number | null
}

export interface IFilter {
  price: IPrice
  gamesIds: string[]
  platforms: {
    list: IPlatform[],
    active: IPlatform | null
  }
}

export interface IFilterGame extends IGame {
  count: number
}