import styles from './styles/main.module.scss'

// Components
import * as UI from '@ui/index'

// Decompose to ./types.ts
interface IAttentionProps {
  title: string
  link: string
  linkName?: string
}

export function Attention({ title, linkName, link }: IAttentionProps) {
  return <div className={styles.attention}>
    <div className={styles.title}>
      { title }
    </div>
    <UI.Button
      content={linkName || link}
      link={link}
    />
  </div>
}