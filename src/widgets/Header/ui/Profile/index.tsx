import styles from './styles/main.module.scss'

// Hooks
import { useState } from 'react'

// Components
import Avatar from './Avatar'
import Content from './Content'

interface IProfileProps {
  importantHidden?: boolean
}

export function Profile({ importantHidden }: IProfileProps) {
  const [active, setActive] = useState<boolean>(false)

  function hide() {
    setActive(false)
  }

  return <div className={styles.burger}>
    <Avatar
      onClick={() => setActive(pre => !pre)}
    />
    <Content
      isActive={active && !importantHidden}
      hide={hide}
    />
  </div>
}