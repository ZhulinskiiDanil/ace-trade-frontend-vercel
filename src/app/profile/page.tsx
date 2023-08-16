'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Types
import { IUser, UserStatus } from '@/entities/user/types'

// Components
import { ProfileWrapper } from '@/processes/profile/wrapper'

function Component() {
  const user: IUser = {
    id: 123,
    avatarURL: "/testImage.png",
    status: UserStatus.OFFLINE,
    
    username: "Danil_2022",
    email: "31321@gmail.com",
    emailVerified: true,
    balance: 300,
    frozenBalance: 300,
    
    createdAt: "123",
  }
  return <ProfileWrapper user={user} />
}

export default PageLayout(
  Component, {
    imports: [
      Header,
      Content,
      Footer
    ],
    settings: []
  }
)