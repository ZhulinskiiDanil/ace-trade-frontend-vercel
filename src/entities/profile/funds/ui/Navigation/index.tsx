import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import clsx from 'clsx'
import { useState } from 'react'

// Decompose to ./types.ts
interface IFundsNavigationProps {
  user: IUser
}

// Decompose to ./types.ts
interface INavRoute {
  id: string
  content: string
}

export function FundsNavigation({ user }: IFundsNavigationProps) {
  const [activeRoute, setActiveRoute] = useState<number>(0)
  const routes: INavRoute[] = [
    {
      id: "operations",
      content: "Операции"
    },
    {
      id: "topup",
      content: "Пополнения"
    },
    {
      id: "up",
      content: "Выводы"
    },
    {
      id: "buy-sell",
      content: "Покупка / Продажа"
    }
  ]

  function changeRoute(index: number) {
    setActiveRoute(index)
  }

  const navRoutesList = routes.map((route: INavRoute, index) => (
    <NavItem
      key={route.id}
      content={route.content}
      isActive={activeRoute === index}
      onClick={() => changeRoute(index)}
    />
  ))

  return <ul className={styles.nav}>
    <div className={styles.center}>
      { navRoutesList }
    </div>
  </ul>
}

interface INavItemProps {
  content: string
  isActive: boolean

  [key: string]: any
}

function NavItem({ content, isActive, ...props }: INavItemProps) {
  const classNames = clsx(styles.nav__item, {
    [styles.active]: isActive
  })
  
  return <li {...props} className={classNames}>
    <span>
      { content }
    </span>
  </li>
}