import styles from './styles/main.module.scss'

// Types
import { HTMLProps } from 'react'

// Components
import Image from 'next/image'

export function ChatHeader({
  className, ...props
}: HTMLProps<HTMLDivElement>) {
  const classNames = [
    styles.header, String(className)
  ].join(" ")

  return <div className={classNames} {...props}>
    <div className={styles.user}>
      <div className={styles.avatar}>
        <Image
          src="/testImage.png"
          alt="Avatar"
          fill
        />
      </div>
      <div className={styles.info}>
        <div className={styles.username}>
          Danil_2202
        </div>
        <div className={styles.subtitle}>
          Пользователь тест
        </div>
      </div>
    </div>
  </div>
}