import clsx from 'clsx'
import styles from './styles/main.module.scss'
import { pages } from '@/common/constants/pages'
import { headerPages } from '@/widgets/Header/constants/pages'

// Types
import { IPageWithIcon } from '@ts'

// Hooks
import { useEffect, useState } from 'react'

// Components
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { Profile } from './Profile'
import { Burger } from './Burger'

export function Header() {
  const [hidden, setHidden] = useState<boolean>(false)
  const links = {
    signIn: pages.get({ name: "sign-in" }),
    main: pages.get({ name: "main" })
  }

  const headerLinksList = headerPages.map((page: IPageWithIcon) => (
    <Link key={page.link.key} href={page.link.withInitialValues()}>
      <div className={styles.nav__item}>
        { page.link.name.ru }
      </div>
    </Link>
  ))

  const classNames = clsx(styles.header, {
    [styles.hidden]: hidden
  })

  useEffect(() => {
    const data = {
      scroll: window.scrollY
    }

    const scrollHandler = () => {
      const different = window.scrollY - data.scroll
      const value = different > 0 && window.scrollY !== 0
      
      if (hidden !== value) {
        setHidden(value)
      }

      data.scroll = window.scrollY
    }

    document.addEventListener("scroll", scrollHandler)

    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [hidden, setHidden])

  return <header className={classNames}>
    <div className={styles.cw}>
      {links.main && <Link href={links.main.path}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Logo" fill
          />
        </div>
      </Link>}
      <nav className={styles.nav}>
        { headerLinksList }
      </nav>
      <div className={styles.extensions}>
        <Button
          content="Войти"
          link={links.signIn.path}
          type="white"
          rounded
        />
        <Profile importantHidden={hidden} />
        <Burger />
      </div>
    </div>
  </header>
}