import styles from './styles/main.module.scss'
import { ChangeEvent, FormEvent, HTMLProps, useCallback } from "react"

// Types
import { IUIChatCreationMessage } from '../types/message'

// Hooks
import { useState, useRef, useEffect } from 'react'
import { useTextarea } from './useTextarea'

// Components
// import Image from 'next/image'
import { PaperPlaneIcon } from '@/shared/svg/icons/paper-plane'

interface IChatFormProps {
  onMessage?: (message: IUIChatCreationMessage) => void
}

export function ChatForm({
  onMessage, className, ...props
}: IChatFormProps & HTMLProps<HTMLFormElement>) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const emulatedRef = useRef<HTMLTextAreaElement | null>(null)
  useTextarea(textareaRef, emulatedRef, input)

  async function onSubmit(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault?.()
    sendMessage()
  }

  const sendMessage = useCallback(function sendMessage() {
    if (!input.trim()) return
    setInput('')

    if (onMessage instanceof Function) {
      onMessage({
        content: input
      })
    }
  }, [input, onMessage])

  function contentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.trim()) {
      setInput(e.target.value)
    } else {
      setInput("")
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handler)

    function handler(e: KeyboardEvent) {
      if (e.code == "Enter" && !e.shiftKey) {
        sendMessage()
      }
    }

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [sendMessage])

  const classNames = [
    styles.container,
    String(className)
  ].join(" ")

  return <>
    <textarea
      ref={emulatedRef}
      value={input}
      onChange={contentChange}
      className={styles.emulated}
    />
    <form
      onSubmit={onSubmit}
      className={classNames}
      {...props}
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={contentChange}
        placeholder="Напишите сообщение"
        className={styles.textarea}
      />
      <button className={styles.submit}>
        <PaperPlaneIcon className={styles.icon} />
      </button>
    </form>
  </>
}

// function FormTools() {
//   const formTools = useSelector(state => (
//     state.chat.otherFunctions
//   ))

//   if (!formTools?.length) return
//   if (formTools.every(elm => !elm.visible)) return
//   return <div className={styles.tools}>
//     {formTools.map(item => (
//       <FormTool
//         key={item.id}
//         onClick={item.callback}
//         title={item.name}
//         visible={item.visible}
//       />
//     ))}
//   </div>
// }

// function FormTool({ title, visible, ...props }) {
//   if (!visible) return
//   return <button {...props} className={styles.tool}>
//     { title }
//   </button>
// }