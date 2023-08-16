'use client'
import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import { FundsHead, FundsNavigation } from '@/entities/profile/funds'

// Decompose to ./types.ts
interface IFundsWrapperProps {
  user: IUser
}

export function FundsWrapper({ user }: IFundsWrapperProps) {
  return <div className={styles.container}>
    <FundsHead        user={user} />
    <FundsNavigation  user={user} />
  </div>
}