import styles from './styles/main.module.scss'

// Components
import Image from 'next/image'

export default function Avatar(props: any) {
  return <div {...props} className={styles.avatar}>
    <Image
      src="/testImage.png"
      alt="Profile" fill
    />
  </div>
}