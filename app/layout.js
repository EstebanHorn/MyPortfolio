import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Esteban Horn',
  description: 'Full Stack developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
