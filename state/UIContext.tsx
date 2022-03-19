import React from 'react'
import { useRouter } from 'next/router'

export interface UIContextStateI {
  // Overlay
  isOverlayOpen: boolean
  setOverlayOpen: (isOverlayOpen: boolean) => void
  // FullPreview
  isPreviewOpen: boolean
  previewImage: string
  openFullPreview: (media: string) => void
  closeFullPreview: () => void
  resetAll: () => void
}

const initialState: UIContextStateI = {
  // Overlay
  isOverlayOpen: false,
  setOverlayOpen: () => {},
  // FullPreview
  isPreviewOpen: false,
  previewImage: '',
  openFullPreview: () => {},
  closeFullPreview: () => {},
  resetAll: () => {},
}

const UIContext = React.createContext<UIContextStateI>(initialState)

interface UIProviderProps {
  children: React.ReactNode
}

const UIProvider = ({ children }: UIProviderProps) => {
  const { asPath } = useRouter()

  // Overlay
  const [isOverlayOpen, setOverlayOpen] = React.useState(false)

  // Image FullPreview
  const [isPreviewOpen, setPreviewOpen] = React.useState(false)
  const [previewImage, setPreviewImage] = React.useState('')

  const openFullPreview = React.useCallback((media) => {
    setPreviewImage(media)
    setPreviewOpen(true)
    setOverlayOpen(true)
  }, [])

  const closeFullPreview = React.useCallback(() => {
    setPreviewImage('')
    setPreviewOpen(false)
    setOverlayOpen(false)
  }, [])

  const resetAll = React.useCallback(() => {
    setOverlayOpen(false)
    closeFullPreview()
  }, [])

  React.useEffect(() => resetAll(), [asPath])

  const contextValue = {
    // Overlay
    isOverlayOpen,
    setOverlayOpen,
    // FullPreview
    isPreviewOpen,
    previewImage,
    openFullPreview,
    closeFullPreview,
    resetAll,
  }

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  )
}

const useUI = () => {
  return React.useContext(UIContext)
}

export { UIProvider, useUI }
