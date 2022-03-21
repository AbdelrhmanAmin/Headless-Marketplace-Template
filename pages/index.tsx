import { Container, TitleAndMeta } from '@components/ui'
import React from 'react'

const LandingPage = () => {
  return (
    <Container hasPaddingX>
      <TitleAndMeta title="[name]" />
      <div className="flex flex-col h-screen text-gray-700 justify-center items-center">
        <h1 className="text-5xl">Landing Page</h1>
        <p className="text-2xl">Coming soon...</p>
      </div>
    </Container>
  )
}

export default LandingPage
