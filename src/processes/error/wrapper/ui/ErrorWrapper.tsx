import styles from './styles/main.module.scss'

// Types
import { IPage } from '@pages-router'
import Link from 'next/link'

// Decompose to ./types.ts
interface IErrorWrapperProps {
  code: number
  text: string
  links?: IPage[]
}

export function ErrorWrapper({
  code, text, links
}: IErrorWrapperProps) {
  const linksList = links ? (
    <div className={styles.links}>
      {links.map((link: IPage) => (
        <Link key={link.key} href={link.path}>
          <div className={styles.link}>
            { link.name.ru }
          </div>
        </Link>
      ))}
    </div>
  ) : ""

  return <div className={styles.error}>
    <div className={styles.code}>
      { code }
    </div>
    <hr className={styles.hr} />
    <div className={styles.text}>
      { text }
    </div>
    { linksList }
  </div>
}