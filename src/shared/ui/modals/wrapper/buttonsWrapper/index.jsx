import styles from './main.module.scss'

const classesByType = {
  "red": styles.red,
  "light": styles.light,
  "primary": styles.primary
}

const classesBySize = {
  "big": styles.bigSize,
  "small": styles.smallSize
}

export default function ButtonForModal({ text, type, size, ...props }) {
  return <button {...props} className={[
    styles.button,
    classesByType[type],
    classesBySize[size]
  ].join(' ')}>
    { text }
  </button>
}