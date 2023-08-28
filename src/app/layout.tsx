import './globals.scss'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Menu from './components/menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quizzer',
  description: 'A fun quiz game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Menu></Menu>
        {children}
      </body>
    </html>
  )
}
