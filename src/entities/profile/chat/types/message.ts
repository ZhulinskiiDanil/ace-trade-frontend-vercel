export type MessageType = "normal" | "system"

export interface IMessage {
  id: string
  chatId: string
  createdAt: string
  username: string
  content: string
  type: MessageType
}