import styles from './main.module.scss'
import clsx from 'clsx'

// Types
import { HTMLInputTypeAttribute, ReactNode } from 'react'

interface IInput {
  children?: ReactNode
  value?: string
  placeholder?: string
  className?: string
  type?: HTMLInputTypeAttribute

  // Boolean
  fill?: boolean
  hidden?: boolean
  rounded?: boolean
  fullWidth?: boolean

  [key: string]: any
}

export function Input({
  children,
  fill = false,
  hidden = false,
  rounded = false,
  fullWidth = false,
  type, placeholder, className, ...props
}: IInput) {
  const classNames = clsx({
    [styles.label]: true,
    [String(className)]: true,

    // Dynamic class names
    [styles.fill]: fill,
    [styles.hidden]: hidden,
    [styles.rounded]: rounded,
    [styles.fullWidth]: fullWidth
  })

  return <label className={classNames}>
    <input
      {...props}
      type={type || "text"}
      className={styles.input}
      placeholder={placeholder || ""}
    />
  </label>
}