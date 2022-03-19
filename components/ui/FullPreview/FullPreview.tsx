import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useUI } from '@state'
import s from './FullPreview.module.css'

interface IProps {
  media: string
  isOpen: boolean
}

const FullPreview = ({ media, isOpen }: IProps) => {
  const imageContainerRef = React.useRef<HTMLDivElement>(null)
  const { closeFullPreview } = useUI()

  // handle FullPreview onKeyDown
  const handleFullPreview = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Escape') {
      closeFullPreview()
    }
    // This will trap the tab focus on the full preview to prevent background tabbing.
    if (e.key === 'Tab') {
      e.preventDefault()
      imageContainerRef.current?.focus()
    }
  }

  React.useEffect(() => {
    // This will move the focus to the full preview as soon as it is open.
    if (isOpen) imageContainerRef.current?.focus()
  }, [isOpen])

  return (
    <div
      ref={imageContainerRef}
      className={cn(isOpen ? s.root : 'hidden')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleFullPreview(e)}
      onClick={closeFullPreview}
    >
      <Image
        src={media}
        alt={'Full preview'}
        width={600}
        height={600}
        priority
      />
    </div>
  )
}

export default FullPreview
