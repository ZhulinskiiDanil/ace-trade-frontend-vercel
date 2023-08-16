import styles from './styles/main.module.scss'

// Model
import { onMessage } from '../model'

// Hooks
import { useSearchParams } from 'next/navigation'

// Components
import { NavBar } from '@/entities/profile/chat/ui/Nav'
import { Chats } from '@/entities/profile/chat/ui/Chats'
import { ChatMessages } from '@/entities/profile/chat/ui/Messages'
import { ChatHeader } from '@/shared/ui/chat/Header'
import { ChatForm } from '@/shared/ui/chat/Form'
import clsx from 'clsx'

export function ChatWrapper() {
  const searchParams = useSearchParams()
  const chatIdIsEmpty = !searchParams.get("chatId")

  const chatIdIsEmptyClassName = { [styles.chatIsEmpty]: chatIdIsEmpty }
  const nodeClassNames = clsx(styles.node, chatIdIsEmptyClassName)
  const chatsClassNames = clsx(styles.chats, chatIdIsEmptyClassName)
  
  const nodeChildren = chatIdIsEmpty ? (
    <p className={styles.empty}>
      Select a chat to start messaging
    </p>
  ) : (
    <>
      <ChatHeader
        className={styles.header}
      />
      <ChatMessages
        className={styles.messages}
      />
      <ChatForm
        className={styles.form}
        onMessage={onMessage}
      />
    </>
  )

  return <div className={styles.wrapper}>
    <NavBar />
    <Chats className={chatsClassNames} />
    <div className={nodeClassNames}>
      { nodeChildren }
    </div>
  </div>
}