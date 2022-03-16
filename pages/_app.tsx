import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@Components/UI'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-yellow-400'>
      <Header />
      <main className='px-24'>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
