import styles from './styles/main.module.scss'

// Types
import { IGame } from "../../../../../types"

// Components
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Decompose to ./types.ts
interface IGameProps {
  game: IGame
  index?: number
}

export function Game({ game, index = 0 }: IGameProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const scale = 1 - (.1 * index)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty('--scale', String(scale))
      ref.current.style.setProperty('--index', String(index))
    }
  }, [ref, scale, index])

  return <div ref={ref} className={styles.game}>
    <Image
      draggable={false}
      src={game.image}
      alt="Game"
      fill
    />
  </div>
}