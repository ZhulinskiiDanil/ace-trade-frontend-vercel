import '@/app/styles/globals.scss'

// Types
import { Metadata } from 'next'

// Components
import WithProviders from './withProviders'

export const metadata: Metadata = {
  title: "Ace Trade",
  description: "Ace Trade Description"
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/favicon.ico" as="image" />
      </head>
      <body>
        <WithProviders>
          { children }
        </WithProviders>
      </body>
    </html>
  )
}
