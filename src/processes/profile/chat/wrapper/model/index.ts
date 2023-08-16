// Types
import { IUIChatCreationMessage } from '@/shared/ui/chat/types/message'

export function onMessage(message: IUIChatCreationMessage) {
  console.log(message.content);
}