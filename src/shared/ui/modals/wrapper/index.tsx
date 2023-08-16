import styles from './styles/main.module.scss'

interface IModalProps extends React.PropsWithChildren {

}

export default function ModalWrapper({
  children
}: IModalProps) {
  return <div className={styles.wrapper}>
    { children }
  </div>
}