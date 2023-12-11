import './globals.css'
import { Lato } from 'next/font/google'
import Providers from './providers'
import { SearchContextProvider } from './contexts/search-context'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-bio-rhyme',
})

export const metadata = {
  title: 'Digimon Search',
  description: 'Explore and discover Digimons with our search application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-hidden bg-mainColor-700`}>
        <SearchContextProvider>
          <Providers>{children}</Providers>
        </SearchContextProvider>
      </body>
    </html>
  )
}
