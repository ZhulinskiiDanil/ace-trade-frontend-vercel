import React from 'react'
import styles from './styles/main.module.scss'

export function ButtonsWrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.buttons}>
    { children }
  </div>
}