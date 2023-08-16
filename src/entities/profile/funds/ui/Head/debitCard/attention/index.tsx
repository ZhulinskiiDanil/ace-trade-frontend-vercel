import styles from './styles/main.module.scss'

// Funcs
import { formatToCurrency } from '@/common/funcs'

// SVG
import * as SVG from '@/shared/svg'

// Components
import Image from 'next/image'

// Decompose to ./types.ts
interface IAttentinProps {
  
}

export function Attention({}: IAttentinProps) {
  const frozenBalance = formatToCurrency(100)
  const snowflake = <SVG.SnowflakeIcon
    width="100%"
    height="100%"
  />

  return <div className={styles.attention}>
    <AttentionItem icon={snowflake} text={frozenBalance + "₽"} />
  </div>
}

interface IAttentionItemProps {
  text: string
  icon?: React.ReactNode
}

function AttentionItem({ text, icon }: IAttentionItemProps) {
  return <div className={styles.attention__item}>
    <div className={styles.icon}>
      { icon }
    </div>
    <div className={styles.text}>
      <span>
        { text }
      </span>
    </div>
  </div>
}