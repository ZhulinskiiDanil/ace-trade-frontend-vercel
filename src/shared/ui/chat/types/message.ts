export type MessageType = "normal" | "system"

export interface IUIChatMessage {
  id: string
  chatId: string
  createdAt: string
  username: string
  content: string
  type: MessageType
}

export interface IUIChatCreationMessage {
  content: string
}