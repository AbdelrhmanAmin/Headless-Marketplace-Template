import React from 'react'
import { Header, Footer } from '@components/ui'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-yellow-400">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
