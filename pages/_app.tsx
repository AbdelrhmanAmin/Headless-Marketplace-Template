import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@Components/UI'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-yellow-400 min-h-screen">
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Ubuntu Mono', monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Header />
      <main className="px-24">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
