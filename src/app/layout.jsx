import { Amatic_SC, Merriweather, Inter } from 'next/font/google'
import Header from '../components/Header'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../lib/site'
import '../index.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-merriweather', display: 'swap' })
const amaticSC = Amatic_SC({ subsets: ['latin'], weight: ['700'], variable: '--font-amatic', display: 'swap' })

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Prince Edward County local food',
    'PEC farm collective',
    'County Farm Collective',
    'local food delivery Prince Edward County',
    'PEC farmers market',
    'Ontario local food',
    'Prince Edward County vegetables',
    'local farmers PEC',
    'weekly farm box Prince Edward County',
    'PEC growers',
    'Picton local food',
    'Wellington Ontario farmers',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/cabbage.png', apple: '/cabbage.png' },
  alternates: { canonical: SITE_URL },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} ${amaticSC.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
