import styles from './styles/main.module.scss'

// Hooks
import { ChangeEvent } from 'react'

// Components
import { Input } from '@/shared/ui'

// Types
import { IPrice } from '../../types'

type InputChange = ChangeEvent<HTMLInputElement>

// Decompose to ./types.ts
interface IPriceProps {
  price: IPrice
  change?: (type: "min" | "max", value: number | null) => void
}

export function Price({ price, change }: IPriceProps) {
  function changeHandler(e: InputChange, type: "min" | "max") {
    const value = e.target.value.match(/[0-9]/g)?.join?.("") || ""
    const parsedPrice = parseFloat(value) > 1_000_000_000 ?
      1_000_000_000 : parseFloat(value) || null

    if (change instanceof Function) {
      change(type, parsedPrice)
    }
  }

  return <div className={styles.price}>
    <Input
      value={String(price.min || "")}
      onChange={(e: InputChange) => changeHandler(e, "min")}
      placeholder="От:"
    />
    <hr className={styles.hr} />
    <Input
      value={String(price.max || "")}
      onChange={(e: InputChange) => changeHandler(e, "max")}
      placeholder="До:"
    />
  </div>
}