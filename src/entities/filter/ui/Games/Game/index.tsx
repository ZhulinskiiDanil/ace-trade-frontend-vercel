import styles from './styles/main.module.scss'

// Types
import { IFilterGame } from '../../../types'
import clsx from 'clsx'

// Decompose to ./types.ts
interface IGameProps {
  game: IFilterGame
  isActive?: boolean

  [key: string]: any
}

export function Game({ game, isActive, ...props }: IGameProps) {
  const classNames = clsx(styles.game, {
    [styles.active]: isActive
  })

  return <div {...props} className={classNames}>
    <div className={styles.name}>
      { game.name }
    </div>
    <div className={clsx(styles.count, styles.zero)}>
      { `(${ game.count })` }
    </div>
  </div>
}