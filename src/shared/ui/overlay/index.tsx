import styles from './main.module.scss'
import clsx from 'clsx'

interface IOverlayProps {
  active: boolean
  className?: string
  [key: string]: any
}

export function Overlay({
  active, className, ...props
}: IOverlayProps) {
  const classNames = clsx(styles.overlay, className, {
    [styles.active]: active
  })

  return (
    <div className={classNames} {...props} />
  )
}