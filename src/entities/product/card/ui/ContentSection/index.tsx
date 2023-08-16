import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'
import { IProductItem, IProduct } from '../../../types'

// Components
import Image from 'next/image'
import { User } from '@/entities/user'
import { Games } from './Games'

// Decompose to ./types.ts
interface IContentSectionProps {
  data: IProduct | null
}

export function ContentSection({ data }: IContentSectionProps) {
  const items: IProductItem[] = data?.items || []
  const title = items[0]?.title || "Заголовок отсутствует"
  const description = items[0]?.description || "Описание отсутствует"
  const image = wrapImage(items[0]?.game?.image)

  return <div className={styles.content__section}>
    <div className={styles.backImage}>
      { image }
    </div>
    <div className={styles.title}>
      { title }
    </div>
    <div className={styles.description}>
      { description }
    </div>
    <hr data-y />
    <div className={styles.moreContainer}>
      <Games items={items} />
      <hr data-x />
      <User
        className={styles.user}
        user={data?.author as IUser}
      />
    </div>
  </div>
}

function wrapImage(image: string | null) {
  if (typeof image === "string") {
    return <Image
      draggable={false}
      src={image}
      alt="Image"
      fill
    />
  }
}