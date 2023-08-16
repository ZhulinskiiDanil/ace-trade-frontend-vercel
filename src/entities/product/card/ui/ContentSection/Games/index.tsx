import styles from './styles/main.module.scss'

// Types
import { IProductItem } from "../../../../types"

// Components
import { Game } from './Game'

// Decompose to ./types.ts
interface IGamesProps {
  items: IProductItem[]
}

export function Games({ items }: IGamesProps) {
  const gamesList = [
    ...items,
    ...items,
    ...items,
    ...items
  ].map((item: IProductItem, index) => (
    <Game key={item.id} game={item.game} index={index} />
  ))

  return <div className={styles.games}>
    <div className={styles.list}>
      { gamesList }
    </div>
    <div className={styles.counter}>
      40
    </div>
  </div>
}