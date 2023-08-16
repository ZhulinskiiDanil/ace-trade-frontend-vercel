// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Регистрация завершена",
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
