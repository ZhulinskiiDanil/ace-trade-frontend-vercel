import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Types
import { IProductItem, IProduct } from '../../../types'

// Components
import Image from 'next/image'
import { Extensions } from './Extensions'

// Decompose to ./types.ts
interface IImageSectionProps {
  data: IProduct
  className?: string
}

export function ImageSection({
  data, className
}: IImageSectionProps) {
  const items: IProductItem[] = data?.items || []
  const item: IProductItem = items[0]
  const image: string | null = item?.images?.[0] || null

  const classNames: string = clsx(styles.image__section, className)

  const wrappedImage = wrapImage(image)

  return <div className={classNames}>
    <div className={styles.content}>
      <Extensions data={data} />
      <div className={styles.image}>
        <div className={styles.blured}>
          { wrappedImage }
        </div>
        <div className={styles.main}>
          { wrappedImage }
        </div>
      </div>
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