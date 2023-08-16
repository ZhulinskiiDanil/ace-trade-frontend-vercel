import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'
import { IProduct } from '@/entities/product/types'

// Components
import { ProductCard } from '@/entities/product/card'

export function ProfileProducts({ user }: { user: IUser }) {
  return <div className={styles.products}>
    <ProductCard data={{} as IProduct} />
  </div>
}