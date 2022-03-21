import React from 'react'
import { Header, Footer, FullPreview, Overlay } from '@components/ui'
import { useUI } from '@state'
import { Drawer } from '@components/connectors'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isOverlayOpen, isPreviewOpen, previewImage, resetAll } = useUI()
  return (
    <>
      <Overlay isOpen={isOverlayOpen} onClick={resetAll}>
        <FullPreview media={previewImage} isOpen={isPreviewOpen} />
      </Overlay>
      {/* <Overlay isOpen={isOverlayOpen} onClick={resetAll}>
      </Overlay> */}
      <Drawer />
      <div className="bg-yellow-400">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
