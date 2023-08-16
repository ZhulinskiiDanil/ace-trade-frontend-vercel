import { IPlatform, ProductPlatform } from '@/entities/product/types'

// Images
import testImage from "@public/testImage.png"

export const platforms: {
  [key: string]: IPlatform
} = {
  [ProductPlatform.STEAM]: {
    value: ProductPlatform.STEAM,
    image: testImage.src,
    name: "Steam"
  },
  [ProductPlatform.EPICGAMES]: {
    value: ProductPlatform.EPICGAMES,
    image: testImage.src,
    name: "Epic Games"
  }
}