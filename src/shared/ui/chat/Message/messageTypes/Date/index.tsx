import styles from './styles/main.module.scss'

interface IDateMessage {
  date: Date
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export function DateMessage({ date }: IDateMessage) {
  const day = date.getUTCDate()
  const month = date.getMonth()

  return <div className={styles.message}>
    { day } { months[month - 1] }
  </div>
}