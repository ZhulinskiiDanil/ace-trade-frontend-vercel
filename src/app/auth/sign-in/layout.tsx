// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Вход",
  description: "Войдите в аккаунт и начните покупать/продавать игровые ценности",
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
