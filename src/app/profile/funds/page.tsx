'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Types
import { IUser, UserStatus } from '@/entities/user/types'

// Components
import { FundsWrapper } from '@/processes/profile/funds/wrapper'

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
  return <FundsWrapper user={user} />
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