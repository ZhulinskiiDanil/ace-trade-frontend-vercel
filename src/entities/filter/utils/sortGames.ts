// Types
import { IFilterGame } from "../types"

export function sortGames(games: IFilterGame[]) {
  return games?.slice?.()
    .sort((a, b) => {
      const lc = (str: string) => str.toLowerCase()
      return lc(a.name?.[0]) > lc(b.name?.[0]) ? 0 : -1
    })
    .sort((a, b) => b.count - a.count)
}