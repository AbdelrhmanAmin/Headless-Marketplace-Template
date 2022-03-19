import React from 'react'
import cn from 'classnames'
import s from './Overlay.module.css'

interface OverlayProps {
  isOpen: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const Overlay = ({ isOpen, children, ...rest }: OverlayProps) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.className = 'overflow-hidden'
    } else {
      document.body.className = 'overflow-auto'
    }
  }, [isOpen])

  const onClick = () => {
    if (rest.onClick) {
      rest.onClick()
    }
  }

  return (
    <div
      className={cn(s.root, isOpen ? s.show : s.hide, {
        'cursor-pointer': rest.onClick,
      })}
      aria-hidden="true"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Overlay
