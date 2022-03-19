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
    height: 305,
    width: 305,
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
  isLoading?: boolean
}

const ImageViewer = ({ media, className, alt, variant, isLoading }: IProps) => {
  const rootClass = cn(s.root, className)
  const img = Variants[variant]
  return (
    <div className={rootClass}>
      {isLoading ? (
        <div className='py-2 overflow-hidden w-full h-full'>
          <div className="h-full w-full bg-gray-600 rounded-md animate-pulse" />
        </div>
      ) : (
        <Image src={media} alt={alt} priority {...img} />
      )}
    </div>
  )
}

export default ImageViewer
