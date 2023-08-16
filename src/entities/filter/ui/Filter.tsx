import React, { memo } from 'react'
import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Constants
import { platforms } from '@/common/constants/platforms'

// Types
import { IFilter, IFilterGame } from '../types'
import { IPlatform } from '@/entities/product/types'

// Hooks
import { useState, useEffect } from 'react'

// Components
import { Overlay } from '@/shared/ui/overlay'
import { Platforms } from './Platforms'
import { GamesSearch } from './Games/Search'
import { Games } from './Games'
import { Price } from './Price'

// Decompose to ./types.ts
interface IFilterProps {
  onChange?: (filter: IFilter) => void
  className?: string
}

export const Filter: React.FC<IFilterProps> = memo(function Filter({
  onChange, className
}) {
  const [active, setActive] = useState<boolean>(false)
  const platformsList: IPlatform[] = Object.entries(platforms)
    .map(([_, platform]: [string, IPlatform]) => platform)
  const [filter, setFilter] = useState<IFilter>({
    price: { min: null, max: null },
    gamesIds: [],
    platforms: {
      list: platformsList,
      active: null
    }
  })
  const [search, setSearch] = useState<string>("")
  const games: IFilterGame[] = [
    {
      id: "123",
      image: "/testImage.png",
      name: "grand theft auto V",
      count: 1
    },
    {
      id: "1233",
      image: "/testImage.png",
      name: "CS:GO",
      count: 1
    },
    {
      id: "1243",
      image: "/testImage.png",
      name: "Fortnite",
      count: 1
    }
  ]

  useEffect(() => {
    if (onChange instanceof Function) {
      const timeout = setTimeout(() => {
        onChange(filter)
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [onChange, filter])

  function changeSearch(value: string) {
    setSearch(value)
  }

  function changePrice(type: "min" | "max", value: number | null) {
    setFilter((pre: IFilter) => ({
      ...pre, price: {
        ...pre.price,
        [type]: value
      }
    }))
  }

  function changePlatform(platform: IPlatform) {
    setFilter((pre: IFilter) => ({
      ...pre, platforms: {
        ...pre.platforms,
        active: platform
      }
    }))
  }

  function changeGame(game: IFilterGame) {
    const findedGame = filter.gamesIds.find(gameId => gameId === game.id)
    const gamesIds = filter.gamesIds.filter(gameId => gameId !== game.id)

    if (!findedGame) {
      gamesIds.push(game.id)
    }

    setFilter((pre: IFilter) => ({ ...pre, gamesIds }))
  }

  const classNames = clsx(styles.filter, className, {
    [styles.active]: active
  })

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : ""
    
    const onResize = () => {
      if (window.innerWidth > 1080) {
        document.body.style.overflow = ""
      }
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [active])
  
  return <>
    <Overlay
      onClick={() => setActive(false)}
      className={styles.overlay}
      active={active}
    />
    <button
      onClick={() => setActive(true)}
      className={styles.changeFilter}
    >F</button>
    <div className={classNames}>
      <Section title="Платформы">
        <Platforms
          platforms={filter.platforms.list}
          active={filter.platforms.active || null}
          change={changePlatform}
        />
      </Section>
      <Section title="Игры">
        <GamesSearch change={changeSearch} />
        <Games
          games={games}
          search={search}
          change={changeGame}
          activeGames={Object.fromEntries(
            filter.gamesIds.map(gameId => [gameId, true])
          )}
        />
      </Section>
      <Section title="Цена">
        <Price
          price={filter.price}
          change={changePrice}
        />
      </Section>
    </div>
  </>
})

interface ISectionProps extends React.PropsWithChildren {
  title: string
}

function Section({ children, title }: ISectionProps) {
  return <div className={styles.section}>
    <div className={styles.title}>{ title }</div>
    { children }
  </div>
}