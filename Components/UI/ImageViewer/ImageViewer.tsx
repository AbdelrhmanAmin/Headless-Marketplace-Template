import React from 'react'
import Image, { ImageProps } from 'next/image'
import s from './ImageViewer.module.css'
import cn from 'classnames'

interface ImgPropsInterface {
  width: ImageProps['width']
  height: ImageProps['height']
  layout: ImageProps['layout']
  objectFit: ImageProps['objectFit']
}

type VariantTypes = 'Marketplace' | 'Product'

const Variants: {
  [key in VariantTypes]: ImgPropsInterface
} = Object.freeze({
  Marketplace: {
    width: 305,
    height: 305,
    layout: 'fixed',
    objectFit: 'cover',
  },
  Product: {
    width: '508',
    height: '508',
    layout: 'intrinsic',
    objectFit: 'fill',
  },
})

interface IProps {
  media: string
  variant: VariantTypes
  alt?: string
  className?: string
}

const ImageViewer = ({ media, className, alt, variant }: IProps) => {
  const rootClass = cn(s.root, className)
  const img = Variants[variant]
  return (
    <div className={rootClass}>
      <Image src={media} alt={alt} priority {...img} />
    </div>
  )
}

export default ImageViewer
