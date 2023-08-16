// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Подтвердить смену почты",
  robots: "noindex, nofollow"
}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        { children }
      </body>
    </html>
  )
}
