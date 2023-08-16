import clsx from 'clsx'
import styles from './styles/main.module.scss'

interface IIconProps {
  className?: string
  [key: string]: any
}

export function Icon({
  className, ...props
}: IIconProps) {
  return <div
    className={clsx(
      styles.icon, className ? className : ""
    )} {...props}
  />
}