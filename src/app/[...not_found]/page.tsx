'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Constants
import { pages } from '@/common/constants'

// Components
import { ErrorWrapper } from '@/processes/error/wrapper'

function Component() {
  const links = pages.includes({ name: "not_found" })

  return <ErrorWrapper
    code={404}
    text="Похоже вы потерялись ;("
    links={links}
  />
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