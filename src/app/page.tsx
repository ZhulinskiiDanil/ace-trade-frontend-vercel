'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

function Component() {
  return <div className={styles.container}>
    <div className={styles.title}>
      Empty Container
    </div>
  </div>
}

export default PageLayout(
  Component, {
    imports: [
      Header,
      Content,
      Footer
    ],
    settings: []
  }
)