import { UserStatus, IUserStatus } from "@/entities/user/types"

export const userStatuses: {
  [key: string]: IUserStatus
} = {
  [UserStatus.ONLINE]: {
    value: UserStatus.ONLINE,
    name: "ONLINE"
  },
  [UserStatus.OFFLINE]: {
    value: UserStatus.OFFLINE,
    name: "OFFLINE"
  },
  [UserStatus.IDLE]: {
    value: UserStatus.IDLE,
    name: "IDLE"
  }
}