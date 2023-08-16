import styles from './styles/main.module.scss'

// Types
// Decompose to ./types.ts
import { IUser } from '../types/index'

// Components
import Image from 'next/image'
import clsx from 'clsx'

// Decompose to ./types.ts
interface IUserProps {
  user: IUser
  className?: string
  subtitle?: string
}

export function User({
  user, className, subtitle = "Пользователь"
}: IUserProps) {
  return user ? <div className={clsx(styles.user, className)}>
    <div className={styles.avatar}>
      <Image
        draggable={false}
        src="/testImage.png"
        alt="Avatar"
        fill
      />
    </div>
    <div className={styles.info}>
      <div className={styles.username}>
        { user.username  }
      </div>
      <div className={styles.rating}>
        Рейтинг: 0
      </div>
      <div className={styles.subtitle}>
        { subtitle }
      </div>
    </div>
  </div> : <></>
} 