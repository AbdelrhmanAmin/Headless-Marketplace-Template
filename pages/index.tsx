import { Container, SEO } from '@Components/UI'
import React from 'react'

const LandingPage = () => {
  return (
    <Container hasPaddingX>
      <SEO title="[name]" />
      <img src="/placeholder.jpg" alt="hi" className='w-full h-screen' />
    </Container>
  )
}

export default LandingPage
