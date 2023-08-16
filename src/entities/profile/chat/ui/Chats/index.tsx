import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { HTMLProps } from 'react'

// Components
import { Chat } from "@/shared/ui/chat/Item"

interface IChatsProps {

}

export function Chats({
  className, ...props
}: IChatsProps & HTMLProps<HTMLDivElement>) {
  const classNames = clsx(styles.chats, className)
  
  return <div className={classNames} {...props}>
    <Chat />
    <Chat />
    <Chat />
  </div>
}