import { Amatic_SC, Fraunces, Inter } from 'next/font/google'
import Header from '../components/Header'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-fraunces', display: 'swap' })
const amaticSC = Amatic_SC({ subsets: ['latin'], weight: ['700'], variable: '--font-amatic', display: 'swap' })

export const metadata = {
  title: 'County Farm Collective',
  description: 'Local food from Prince Edward County growers and makers, delivered weekly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${amaticSC.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
