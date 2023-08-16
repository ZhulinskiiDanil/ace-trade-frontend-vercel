import styles from './styles/main.module.scss'

// Components
import { Button } from '@/shared/ui'

export function Buttons() {
  return <div className={styles.buttons}>
    <Button
      type="white"
      content="Пополнить"
      fullWidth rounded
    />
    <Button
      type="white"
      content="Вывести"
      fullWidth rounded
    />
  </div>
}