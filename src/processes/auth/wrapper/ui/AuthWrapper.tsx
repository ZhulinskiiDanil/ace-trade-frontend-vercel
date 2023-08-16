import styles from './styles/main.module.scss'
import React, { FormEvent, useEffect, useState } from 'react'
import clsx from 'clsx'

// Decompose to ./types.ts
interface IAuthWrapperProps extends React.PropsWithChildren {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  error?: string
  warning?: string | React.ReactNode
  setError?: (str: string) => void
  description?: string
  size?: "default" | "mid" | "big"
  onSubmit?: (e: FormEvent) => void
}

export function AuthWrapper({
  children, onSubmit, setError, title, subtitle, error, warning,
  description, size, ...props
}: IAuthWrapperProps) {
  const classNames = clsx(styles.auth, styles[size || "default"])

  function submit(e: FormEvent) {
    e.preventDefault()

    if (typeof onSubmit === "function") {
      onSubmit(e)
    }
  }
  
  return <div className={styles.container}>
    <div className={styles.cw}>
      <AuthTitle title={title} />
      <AuthSubtitle subtitle={subtitle} />
      <form onSubmit={submit} className={classNames} {...props}>
        <Decor />
        { children }
      </form>
      <AuthWarning warning={warning} />
      <AuthError setError={setError} error={String(error || '')} />
    </div>
  </div>
}

function AuthTitle({ title }: { title: string | React.ReactNode | any }) {
  if (title) {
    return <div className={styles.title}>
      { title }
    </div>
  } else return <></>
}

function AuthSubtitle({ subtitle }: { subtitle: string | React.ReactNode | any }) {
  if (subtitle) {
    return <div className={styles.subtitle}>
      { subtitle }
    </div>
  } else return <></>
}

function AuthError({ error, setError }: {
  error?: string
  setError?: (str: string) => void
}) {
  const [isHidden, setIsHidden] = useState(true)

  function hideError() {
    if (setError instanceof Function) {
      setError("")
      setIsHidden(true)
    }
  }

  useEffect(() => {
    setIsHidden(!error)
  }, [error])

  return <div className={clsx(styles.error, {
    [styles.hidden]: isHidden
  })}>
    <span data-text-content>
      { error || "" }
    </span>
    <div onClick={hideError} className={styles.cross}>
      X
    </div>
  </div>
}

function AuthWarning({ warning }: { warning: string | React.ReactNode | any }) {
  if (warning) {
    return <div className={styles.warning}>
      <span className={styles.accent}>ПРЕДУПРЕЖДЕНИЕ:</span> { warning }
    </div>
  } else return <></>
}

function Decor() {
  return <div className={styles.decor}>
    <div className={styles.shadow} />
  </div>
}