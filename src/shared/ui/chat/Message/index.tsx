import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { IUIChatMessage } from '../types/message'

// Components
import { messageTypes } from './messageTypes'
// import { ContextMenu } from './ContextMenu'

interface IMessageProps {
  message: IUIChatMessage
  position?: "left" | "right"
  gradient?: boolean
}

export function Message({
  message, position = "left", gradient = false
}: IMessageProps) {
  const MessageByType = messageTypes[message.type]

  return <div className={clsx(styles.message, styles[position])}>
    {/* <ContextMenu /> */}
    <MessageByType
      position={position}
      message={message}
      gradient={gradient}
    />
  </div>
}