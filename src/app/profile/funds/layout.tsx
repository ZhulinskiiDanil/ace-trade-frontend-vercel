// Types
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Средства",
  robots: "noindex, nofolow"
}

export default function RootLayout({ children }: {
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
