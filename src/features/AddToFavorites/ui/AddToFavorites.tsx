"use client";
import styles from './styles/main.module.scss'
import clsx from 'clsx'

// Hooks
import { useState } from 'react';

// Components
import { HeartIcon } from '@/shared/svg';

// Decompose to ./types.ts
interface IAddToFavoritesProps {
  productId: string
  className?: string
  isFavorite?: boolean
  defaultStroke?: string
}

export function AddToFavorites({
  productId, isFavorite = false, defaultStroke = "#666", className
}: IAddToFavoritesProps) {
  const [checked, setChecked] = useState<boolean>(isFavorite)
  const classNames = clsx(
    styles.addToFavorites, className, {
      [styles.checked]: checked
    }
  )
  
  function toggle() {
    console.log(`${productId} is toggled`);
    
    setChecked(pre => !pre)
  }
  
  return <HeartIcon
    onClick={toggle}
    className={classNames}
    stroke={checked ? "transparent" : defaultStroke}
    active={checked}
  />
}