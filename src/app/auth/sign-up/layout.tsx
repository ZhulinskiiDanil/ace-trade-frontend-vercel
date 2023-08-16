// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Создайте аккаунт и начните покупать/продавать игровые ценности",
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
