import styles from './styles/main.module.scss'
import { gamesWithSearch } from '../../utils'

// Types
import { IFilterGame } from '../../types'

// Components
import { Game } from './Game'

interface IGameProps {
  games: IFilterGame[]
  search?: string
  activeGames?: { [key: string]: any }
  change?: (game: IFilterGame) => void
}

export function Games({ games, change, activeGames, search = "" }: IGameProps) {
  function changeGame(game: IFilterGame) {
    if (change instanceof Function) {
      change(game)
    }
  }

  const gamesList = gamesWithSearch({ games, search })
    .map((game: IFilterGame) => (
      <Game
        key={game.id}
        game={game}
        isActive={!!activeGames?.[game.id]}
        onClick={() => changeGame(game)}
      />
    ))

  return <div className={styles.games}>
    { gamesList }
  </div>
}