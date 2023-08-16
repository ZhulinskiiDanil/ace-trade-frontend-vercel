import styles from './styles/main.module.scss'

// Types
import { Input } from '@/shared/ui'

// Hooks
import { ChangeEvent, useState } from 'react'

// Decompose to ./types.ts
interface IGamesSearchProps {
  change?: (search: string) => void
}

export function GamesSearch({ change }: IGamesSearchProps) {
  const [search, setSearch] = useState<string>("")

  function searchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)

    if (change instanceof Function) {
      change(e.target.value)
    }
  }

  return <Input
    className={styles.input}
    placeholder="Поиск по играм"
    value={search}
    onChange={searchChange}
  />
}