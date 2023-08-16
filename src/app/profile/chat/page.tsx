'use client'
import { PageLayout } from '@layout'
import { Header, Content } from '@layout/components'

// Components
import { ChatWrapper } from '@/processes/profile/chat/wrapper'

function Component() {
  return <ChatWrapper />
}

export default PageLayout(
  Component, {
    imports: [
      Header,
      Content
    ]
  }
)