import styles from './main.module.scss'
import clsx from 'clsx'

// Types
import { ReactNode, createElement } from 'react'

// Compoennts
import Link from 'next/link'

type ButtonType = "default" | "linked" | "white" | "accent" | "secondary"

interface IButton {
  children?: ReactNode
  content?: ReactNode | string
  className?: string
  link?: string
  type?: ButtonType

  // Boolean
  fullWidth?: boolean
  semantic?: boolean
  rounded?: boolean
  hidden?: boolean
  fill?: boolean
  big?: boolean

  [key: string]: any
}

export function Button({
  children, content, link, type,
  fullWidth = false,
  semantic = true,
  rounded = false,
  hidden = false,
  fill = false,
  big = false,
  className, ...props
}: IButton) {
  const classNames = clsx({
    [styles.btn]: true,
    [String(className)]: true,
    [styles[`btn_${type}`]]: true,

    // Dynamic class names
    [styles.big]: big,
    [styles.fill]: fill,
    [styles.hidden]: hidden,
    [styles.rounded]: rounded,
    [styles.semantic]: semantic,
    [styles.fullWidth]: fullWidth
  })

  const button = createElement(semantic ? "button" : "div", {
    ...props, className: classNames
  }, children || content)

  if (link) {
    return <Link href={link}>
      { button }
    </Link>
  } else {
    return button
  }
}