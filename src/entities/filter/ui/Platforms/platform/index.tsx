import clsx from 'clsx'
import styles from './styles/main.module.scss'

// Types
import { IPlatform } from '@/entities/product/types'

// Components
// import Image from 'next/image'

interface IPlatformProps {
  platform: IPlatform
  isActive: boolean

  [key: string]: any
}

export function Platform({ platform, isActive, ...props }: IPlatformProps) {
  const classNames = clsx(styles.platform, {
    [styles.active]: isActive
  })
  
  return <div {...props} className={classNames}>
    <div className={styles.image}>
      {/* <Image
        src={platform.image}
        alt={platform.name}
        fill
      /> */}
    </div>
    <div className={styles.name}>
      { platform.name }
    </div>
  </div>
}