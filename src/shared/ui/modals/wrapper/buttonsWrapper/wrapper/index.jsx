import styles from './main.module.scss'

export default function ButtonsWrapper({
  children, className
}) {
  return <div className={[
    styles.buttons,
    String(className)
  ].join(' ')}>
    { children }
  </div>
}