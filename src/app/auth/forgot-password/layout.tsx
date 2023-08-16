// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Восстановление пароля",
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
