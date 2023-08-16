import styles from './styles/main.module.scss'

// Types
import { IProduct } from '@/entities/product/types'

// Components
import { ProductCard } from '@/entities/product/card'

// Decompose to ./types.ts
interface ICatalogProductsProps {
  products: IProduct[]
}

export function CatalogProducts({ products }: ICatalogProductsProps) {
  const list = products.map((product: IProduct) => (
    <ProductCard key={product.id} data={product} />
  ))
  
  return <div className={styles.products}>
    { list }
  </div>
}