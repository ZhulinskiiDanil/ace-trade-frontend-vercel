import styles from './styles/main.module.scss'
import { ChangeEvent } from 'react'

// Components
import Image from 'next/image'

export function Chat() {
  return <div className={styles.chat}>
    <div className={styles.avatar}>
      <Image
        src="/testImage.png"
        alt="Avatar"
        fill
      />
    </div>
    <div className={styles.info}>
      <div className={styles.username}>
        Danil_2202
      </div>
      <div className={styles.subtitle}>
        Last message test
      </div>
    </div>
  </div>
}