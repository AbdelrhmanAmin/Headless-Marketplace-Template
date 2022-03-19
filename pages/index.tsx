import { Container, SEO } from '@components/ui'
import React from 'react'

const LandingPage = () => {
  return (
    <Container hasPaddingX>
      <TitleAndMeta title="[name]" />
      <img src="/placeholder.jpg" alt="hi" className='w-full h-screen' />
    </Container>
  )
}

export default LandingPage
