// Hooks
import { useEffect } from "react"

interface ITextareaRef {
  current: HTMLTextAreaElement | null
}

export function useTextarea(
  textareaRef: ITextareaRef,
  emulatedRef: ITextareaRef,
  input: string
) {
  useEffect(() => {
    const textarea = textareaRef?.current
    const emulated = emulatedRef?.current
    const fontSize = 13
    
    if (textarea && emulated) {
      // Emulate textarea
      emulated.style.width = textarea.offsetWidth + "px"
      
      // Calculating
      const maxStrings = 10
      const countStrings = Math.floor(emulated.scrollHeight - fontSize / 2)

      textarea.style.overflow = countStrings <= maxStrings ? "hidden" : ""
      emulated.style.overflow = countStrings <= maxStrings ? "hidden" : ""
      
      const minHeight = fontSize
      const height = countStrings <= maxStrings ?
        countStrings * fontSize : maxStrings * fontSize

      textarea.style.height = (height <= minHeight ? minHeight : height) + 'px';
    }
  }, [emulatedRef, textareaRef, input])
}