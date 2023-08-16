import React from 'react'
import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Components
import { ChatsIcon, SupportIcon } from '@/shared/svg'

export function NavBar() {
  return <div className={styles.nav}>
    <NavBarItem active={true}>
      <ChatsIcon className={styles.icon} />
    </NavBarItem>
    <NavBarItem>
      <SupportIcon className={styles.icon} />
    </NavBarItem>
  </div>
}

interface INavBarItemProps extends React.PropsWithChildren {
  active?: boolean
}

function NavBarItem({ children, active = false }: INavBarItemProps) {
  return <div className={clsx(styles.item, {
    [styles.active]: active
  })}>
    { children }
  </div>
}