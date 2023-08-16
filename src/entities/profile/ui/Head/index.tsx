import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import Image from 'next/image'

export function ProfileHead({ user }: { user: IUser }) {
  function withAccent(className: string) {
    return clsx(className, styles.accent)
  }
  
  return <div className={styles.head}>
    <div className={styles.user}>
      <div className={styles.avatar}>
        <div className={withAccent(styles.first)} />
        <div className={withAccent(styles.second)} />
        <Image
          src={user.avatarURL}
          alt="Avatar"
          fill
        />
      </div>
      <div className={styles.username}>
        { user.username }
      </div>
      <div className={styles.createdAt}>
        Дата регистрации: { user.createdAt }
      </div>
    </div>
  </div>
}