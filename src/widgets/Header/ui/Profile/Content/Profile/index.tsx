import styles from './styles/main.module.scss'
import { pages } from '@/common/constants'

// Components
import Link from 'next/link'
import Image from 'next/image'
import { SignOutIcon } from '@/shared/svg'

export function BurgerProfile() {
  const link = pages.get({ name: "profile" })

  function signout() {
    console.log("signout");
  }

  return <div className={styles.profile}>
    <Link className={styles.flexShrink} href={link.path}>
      <button className={styles.avatar}>
        <Image
          draggable={false}
          src="/testImage.png"
          alt='User' fill
        />
      </button>
    </Link>
    <div className={styles.info}>
      <Link className={styles.username} href={link.path}>
        Danil_2202
      </Link>
      <div className={styles.balance}>
        100RUB
      </div>
    </div>
    <div onClick={signout} className={styles.signout}>
      <SignOutIcon className={styles.icon} />
    </div>
  </div>
}