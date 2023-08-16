import { UserStatus } from "./status"

export interface IUser {
  id: number
  createdAt: string
  username: string
  avatarURL: string
  status: UserStatus
  
  email?: string
  emailVerified?: boolean
  
  balance?: number
  frozenBalance?: number
}

export * from './status'