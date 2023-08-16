import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Constants
import { platforms } from '@/common/constants/platforms'

// Types
import { IProduct } from '../../../../types'

// Components
import Image from 'next/image'
import { AddToFavorites } from '@/features/AddToFavorites'
import { PropsWithChildren } from 'react'

// Decompose to ./types.ts
interface IExtensionsProps {
  data: IProduct
}

export function Extensions({ data }: IExtensionsProps) {
  return <div className={clsx(styles.extensions)}>
    <div className={styles.price}>
      100 RUB
    </div>
    <div className={styles.list}>
      <Extension
        title={platforms[data.platform].name}
        image="/testImage.png"
      />
      <Extension title="Добаить в избранные">
        <AddToFavorites
          className={styles.heart}
          defaultStroke="#fff"
          productId={data.id}
        />
      </Extension>
    </div>
  </div>
}

interface IExtensionProps extends PropsWithChildren {
  title: string
  image?: string
}

function Extension({ title, image, children }: IExtensionProps) {
  return <div className={styles.extension}>
    <div className={styles.title}>
      { title }
    </div>
    {image && <div className={styles.image}>
      <Image
        draggable={false}
        src={image}
        alt={title}
        fill
      />
    </div>}
    { children }
  </div>
}