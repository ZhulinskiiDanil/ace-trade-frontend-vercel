import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import { Button } from '@/shared/ui'

export function ProfileNavigation({ user }: { user: IUser }) {
  return <div className={styles.nav}>
    <NavItem
      content="Рейтинг"
    />
    <NavItem
      content="Отзывы"
    />
    <NavItem
      content="Добавить объявление"
    />
  </div>
}

// Decompose to ./types.ts
interface INavItemProps {
  content: string
  link?: string
}

function NavItem({ content, link }: INavItemProps) {
  return <Button
    type="white"
    content={content}
    link={link}
    rounded
  />
}