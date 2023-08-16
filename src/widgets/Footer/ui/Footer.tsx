import styles from './styles/main.module.scss'

// Constants
import { footerLinks } from '../constants/links'
import { pages } from '@/common/constants'

// Types
import { IPage } from '@/shared/libs/pages-router'

// Components
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const mainPage = pages.get({ name: "main" })
  const fromYear = 2023
  const toYear = new Date().getFullYear()
  const year = fromYear === toYear ? fromYear : `${fromYear}-${toYear}г`

  return <footer className={styles.footer}>
    <div className={styles.cw}>
      <div className={styles.company}>
        <Link href={mainPage.path}>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Logo" fill
            />
          </div>
        </Link>
        <div className={styles.company__name}>
          Ace Trade
        </div>
      </div>
      <LinksList />
      <div className={styles.privacy}>
        <p className={styles.privacy__title}>
          AceTrade { year }
        </p>
      </div>
    </div>
  </footer>
}

function LinksList() {
  const footerLinksList = footerLinks.map(list => (
    <div key={list.listName} className={styles.list}>
      <div className={styles.list__name}>
        { list.listName }
      </div>
      <ul className={styles.links}>
        {list.links.map((page: IPage) => (
          <LinksListItem
            key={page.key}
            page={page}
          />
        ))}
      </ul>
    </div>
  ))

  return <div className={styles.linksLists}>
    { footerLinksList }
  </div>
}

function LinksListItem({ page }: { page: IPage }) {
  return <Link href={page.path}>
    <li className={styles.link}>
      { page.name.ru }
    </li>
  </Link>
}