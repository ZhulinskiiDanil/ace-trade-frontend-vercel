export enum UserStatus {
  "ONLINE", "OFFLINE", "IDLE"
}

export interface IUserStatus {
  value: UserStatus,
  name: string
}