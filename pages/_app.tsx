import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Footer } from '@components/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <Header />
      <main className="min-h-full">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
