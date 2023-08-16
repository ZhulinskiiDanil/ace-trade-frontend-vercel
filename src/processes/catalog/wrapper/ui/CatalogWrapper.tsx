import styles from './styles/main.module.scss'

// Types
import { IProduct } from '@/entities/product/types'
import { IFilter } from '@/entities/filter/types'

// Components
import { Filter } from '@/entities/filter'
import { CatalogAddition } from '@/entities/catalog/addition'
import { CatalogProducts } from '@/entities/catalog/products'

export function CatalogWrapper() {
  function Accent(text: string | number) {
    return <span data-accent>{ text }</span>
  }

  function Opacity(text: string, opacity: number) {
    return <span style={{
      opacity: `${opacity}`
    }}>{ text }</span>
  }

  function filterChange(filter: IFilter) {
    
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.cw}>
        <CatalogAddition>
          Найдено { Accent(300) } / { Opacity("Аккаунтов", .5) }
        </CatalogAddition>
        <div className={styles.flex}>
          <Filter
            className={styles.filter}
            onChange={filterChange}
          />
          <CatalogProducts products={
            Array(10).fill(null).map((_, index) => (
              { id: String(index) } as IProduct
            ))
          } />
        </div>
      </div>
    </div>
  )
}