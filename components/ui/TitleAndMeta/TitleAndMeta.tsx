import Head from 'next/head'
import React from 'react'

const TitleAndMeta = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default TitleAndMeta
