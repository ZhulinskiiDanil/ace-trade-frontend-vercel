import FuzzySearch from 'fuzzy-search';
import { sortGames, translit, romanToInt, convertToRoman } from '.'

// Types
import { IRomanChar } from '@ts';
import { IFilterGame } from '../types'

interface IGamesBySearchProps {
  games: IFilterGame[]
  search: string
}

export function gamesWithSearch({ games, search }: IGamesBySearchProps) {
  const parsedSearch = search?.toLowerCase().replaceAll(/\s/g, "_")

  const romanToIntSearch = parsedSearch.replaceAll(/(\s|_)[IVCLCDM]($|\s|_)/g, (str) => {
    return " " + romanToInt(str.trim() as IRomanChar)
  })

  const intToCharSearch = parsedSearch.replaceAll(/(\s|_)[0-9]($|\s|_)/g, (str: string) => {
    return "_" + convertToRoman(parseFloat(str.trim()))
  })

  const gamesSearch = {
    default: parsedSearch,
    translit: translit.transform(parsedSearch),
    withromanToInt: romanToIntSearch,
    withIntToChar: intToCharSearch,
    withIntToCharAndTranslit: translit.transform(intToCharSearch),
    withromanToIntAndTranslit: translit.transform(romanToIntSearch),
    isEmpty() {
      return !this.default && !this.translit
    }
  }

  return sortGames(games).filter((elm: IFilterGame) => {
    const searcher = new FuzzySearch([
      { name: String(elm?.name).replaceAll(" ", "_") }
    ], ['name']);

    const searchResult = {
      default: searcher.search(gamesSearch.default),
      translit: searcher.search(gamesSearch.translit),
      withromanToInt: searcher.search(gamesSearch.withromanToInt),
      withromanToIntAndTranslit: searcher.search(gamesSearch.withromanToIntAndTranslit),
      withIntToCharAndTranslit: searcher.search(gamesSearch.withIntToCharAndTranslit),
      isEmpty() {
        return [
          !this.default?.length,
          !this.translit?.length,
          !this.withromanToInt?.length,
          !this.withromanToIntAndTranslit?.length,
          !this.withIntToCharAndTranslit?.length
        ].every(elm => elm)
      }
    }

    // return searchResult.default?.length
    return !searchResult.isEmpty() || gamesSearch.isEmpty()
  })
}