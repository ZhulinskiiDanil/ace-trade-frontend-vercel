import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import { DebitCard } from './debitCard'

interface IFundsHeadProps {
  user: IUser
}

export function FundsHead({ user }: IFundsHeadProps) {
  return <div className={styles.head}>
    <DebitCard user={user} />
  </div>
}