import styles from './styles/main.module.scss'

// Types
import { IUIChatMessage } from '../../../types/message'

// Components
import { ContextMenu } from '../../ContextMenu'

interface ISystemMessage {
  message: IUIChatMessage
}

export function SystemMessage({ message }: ISystemMessage) {
  return <div className={styles.message}>
    <ContextMenu />
  </div>
}