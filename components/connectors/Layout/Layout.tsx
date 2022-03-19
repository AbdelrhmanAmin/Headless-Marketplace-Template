import React from 'react'
import { Header, Footer, FullPreview, Overlay } from '@components/ui'
import { UIProvider, useUI } from '@state'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isOverlayOpen, isPreviewOpen, previewImage, resetAll } = useUI()
  return (
    <UIProvider>
      <Overlay isOpen={isOverlayOpen} onClick={resetAll}>
        <FullPreview media={previewImage} isOpen={isPreviewOpen} />
      </Overlay>
      <div className="bg-yellow-400">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </UIProvider>
  )
}

export default Layout
