import type { AppProps } from 'next/app'
import { Layout } from '@components/connectors'
import { UIProvider } from '@state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp
