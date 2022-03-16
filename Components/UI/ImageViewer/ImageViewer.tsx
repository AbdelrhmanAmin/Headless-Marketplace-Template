import Image from 'next/image'
import React from 'react'
import s from 'ImageViewer.module.css'
import cn from 'classnames'

interface IProps {
  media: string
  className: string
  alt: string
}

const ImageViewer = ({ media, className, alt }: IProps) => {
  const rootClass = cn(s.root, className)
  return (
    <div className={rootClass}>
      <Image src={media} alt={alt} priority />
    </div>
  )
}

export default ImageViewer
