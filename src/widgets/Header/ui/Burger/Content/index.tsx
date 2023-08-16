"use client";
import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Constants
import { headerPages } from '@/widgets/Header/constants/pages'

// Types
import { IPageWithIcon } from '@ts'
import { IPage } from '@/shared/libs/pages-router'

// Hooks
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

// Components
import Link from 'next/link'
import { Overlay } from "@ui/overlay"

// Decompose to ./types.ts
interface IContentProps {
  isActive: boolean
  hide: () => void
}

export function Content({ isActive, hide }: IContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const pages: IPageWithIcon[] = headerPages

  const linksList = pages.map((page: IPageWithIcon) => (
    <ContentLink key={page.link.key} link={page.link} />
  ))

  return <div className={clsx(styles.container, {
    [styles.visible]: isActive
  })}>
    <Overlay active={isActive} onClick={hide} />
    <div ref={contentRef} className={styles.content}>
      <nav className={styles.nav}>
        { linksList }
      </nav>
    </div>
  </div>
}

function ContentLink({ link }: { link: IPage }) {
  const pathname = usePathname()
  const href = link.withInitialValues()
  const isCurrentPage = pathname.includes(href)

  const classNames = clsx(styles.nav__item, {
    [styles.active]: isCurrentPage
  })

  return <Link href={href}>
    <div className={classNames}>
      <p className={styles.linkName}>
        { link.name.ru }
      </p>
    </div>
  </Link>
}