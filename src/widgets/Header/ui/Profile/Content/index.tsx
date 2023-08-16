import clsx from 'clsx'
import styles from './styles/main.module.scss'
import { profilePages } from '@/widgets/Header/constants/pages'

// Types
import { IPageWithIcon } from '@ts'

// Hooks
import { useEffect, useRef } from 'react'

// Components
import Link from 'next/link'
import { BurgerProfile } from './Profile'

interface IContentProps {
  isActive: boolean
  hide: () => void
}

export default function Content({ isActive, hide }: IContentProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const linksList = profilePages.map((page: IPageWithIcon) => (
    <ContentLink key={page.link.key} page={page} />
  ))

  useEffect(() => {
    function clickHandler(e: Event) {
      if (e.target && contentRef.current) {
        const element = e.target as HTMLElement
        const elementClassName = element.classList[0]
        const childClassName = contentRef.current.classList[0]
        const elementHasTargetNode =
          elementClassName === childClassName ||
          element.querySelector(`.${elementClassName} .${childClassName}`)

        if (!elementHasTargetNode) {
          hide()
        }
      }
    }

    if (isActive) {
      document.addEventListener("click", clickHandler)
    }
  
    return () => {
      document.removeEventListener("click", clickHandler)
    }
  }, [isActive, contentRef, hide])

  return <div ref={contentRef} className={clsx(styles.content, {
    [styles.visible]: isActive
  })}>
    <div className={styles.links}>{ linksList }</div>
    <BurgerProfile />
  </div>
}

interface IContentLinkProps {
  page: IPageWithIcon
}

function ContentLink({ page }: IContentLinkProps) {
  const Icon = page.icon
  
  return <Link href={page.link.withInitialValues()}>
    <div className={styles.link}>
      <div className={styles.icon}>
        { Icon ? <Icon className={styles.image} /> : "" }
      </div>
      <div className={styles.linkName}>
        { page.link.name.ru }
      </div>
    </div>
  </Link>
}