import styles from './styles/main.module.scss'

// Funcs
import { formatToCurrency } from '@/common/funcs'

// Decompose to ./types.ts
interface IBalanceProps {
  amount: number
}

export function Balance({ amount }: IBalanceProps) {
  const balance = formatToCurrency(amount)

  return <div className={styles.balance}>
    <div className={styles.amount}>
      { balance }<span className={styles.currency}>₽</span>
    </div>
  </div>
}