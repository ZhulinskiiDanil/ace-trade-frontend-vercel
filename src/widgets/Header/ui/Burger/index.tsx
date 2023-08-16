import styles from './styles/main.module.scss'

// Hooks
import { useState } from 'react'

// Components
import { Icon } from '@/widgets/Header/ui/Burger/Icon'
import { Content } from '@/widgets/Header/ui/Burger/Content'

// Decompose to ./types.ts
interface IBurgerProps {
  
}

export function Burger({}: IBurgerProps) {
  const [active, setActive] = useState<boolean>(false)

  function hide() {
    setActive(false)
  }

  return <div className={styles.burger}>
    <Icon
      className={styles.icon}
      onClick={() => setActive(pre => !pre)}
    />
    <Content
      isActive={active}
      hide={hide}
    />
  </div>
}