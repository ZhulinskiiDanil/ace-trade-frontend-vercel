import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { HTMLProps } from 'react'
import { IMessage } from '../../types/message'

// Components
import { Message } from '@/shared/ui/chat/Message'

export function ChatMessages({
  className, ...props
}: HTMLProps<HTMLDivElement>) {
  const message: IMessage = {
    id: "123",
    chatId: "123",
    createdAt: new Date().toISOString(),
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, eveniet!",
    username: "Danil_2202",
    type: "normal"
  }

  const classNames = clsx(styles.messages, className)

  return <div {...props} className={classNames}>
    <div className={styles.title}>
        Начало переписки с Danil_2202
    </div>
    <Message
      position="left"
      message={message}
    />
    <Message
      gradient
      position="right"
      message={message}
    />
  </div>
}