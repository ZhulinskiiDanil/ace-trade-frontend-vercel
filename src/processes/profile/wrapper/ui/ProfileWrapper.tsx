'use client'
import styles from './styles/main.module.scss'

// Types
import { IUser } from '@/entities/user/types'

// Components
import {
  ProfileHead,
  ProfileNavigation,
  ProfileProducts
} from '@/entities/profile'

// Decompose to ./types.ts
interface IProfileWrapperProps {
  user: IUser
}

export function ProfileWrapper({ user }: IProfileWrapperProps) {
  return <div className={styles.container}>
    <ProfileHead user={user} />
    <ProfileNavigation user={user} />
    <ProfileProducts user={user} />
  </div>
}