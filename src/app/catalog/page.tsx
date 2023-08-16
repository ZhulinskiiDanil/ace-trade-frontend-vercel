'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Components
import { CatalogWrapper } from '@/processes/catalog/wrapper'

function Component() {
  return <CatalogWrapper />
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