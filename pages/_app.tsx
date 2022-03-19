import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header, Footer } from '@components/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-yellow-400">
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
