import styles from './styles/main.module.scss'

// Decompose to ./types.ts
interface ICatalogAdditionProps extends React.PropsWithChildren {
  
}

export function CatalogAddition({ children }: ICatalogAdditionProps) {
  return <div className={styles.addition}>
    { children }
  </div>
}