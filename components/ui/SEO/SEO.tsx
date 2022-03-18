import Head from 'next/head'
import React from 'react'

const SEO = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
