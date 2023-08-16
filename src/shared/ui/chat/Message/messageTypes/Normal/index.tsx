import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Types
import { IUIChatMessage } from '../../../types/message'

// Components
import Image from 'next/image'

interface INormalMessage {
  message: IUIChatMessage
  position?: "left" | "right"
  gradient?: boolean
}

export function NormalMessage({
  message, position = "left", gradient = false
}: INormalMessage) {
  const date = new Date(message.createdAt)
  const time = date.toLocaleTimeString(undefined, { timeStyle: "short" })

  const classNames = clsx(styles.message, styles[position], {
    [styles.gradient]: gradient
  })

  return <div className={classNames}>
    <div className={styles.avatar}>
      <Image
        src="/testImage.png"
        alt="Avatar"
        fill
      />
    </div>
    <div className={styles.content}>
      { message.content }
    </div>
    <div className={styles.date}>
      { time }
    </div>
  </div>
}