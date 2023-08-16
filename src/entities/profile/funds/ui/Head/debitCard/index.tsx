import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import { Attention } from './attention'
import { Balance } from './balance'
import { Buttons } from './buttons'

// Decompose to ./types.ts
interface IDebitCardProps {
  user: IUser
  className?: string
}

export function DebitCard({ user, className }: IDebitCardProps) {
  const classNames = clsx(styles.card, className)
  
  return <div className={classNames}>
    <Attention />
    <Balance amount={user.balance || 0} />
    <Buttons />
  </div>
}