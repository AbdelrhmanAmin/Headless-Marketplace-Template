import React from 'react'
import Image, { ImageProps } from 'next/image'
import s from './ImageViewer.module.css'
import cn from 'classnames'
import Skeleton from '../Skeleton'

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
    width: '520',
    height: '510',
    layout: 'intrinsic',
    objectFit: 'fill',
  },
})

interface IProps {
  media: string
  variant: VariantTypes
  alt?: string
  rootClassName?: string
  childClassName?: string
  isLoading?: boolean
}

const ImageViewer = ({
  media,
  rootClassName,
  childClassName,
  alt,
  variant,
  isLoading,
}: IProps) => {
  const rootClass = cn(s.root, rootClassName)
  const img = Variants[variant]
  return (
    <div className={rootClass}>
      {isLoading ? (
        <div
          className="overflow-hidden w-full h-full bg-white"
          style={{
            width: `${img['width']}px`,
            height: `${img['height']}px`,
          }}
        >
          <Skeleton />
        </div>
      ) : (
        <Image
          src={media}
          alt={alt}
          priority
          className={childClassName}
          {...img}
        />
      )}
    </div>
  )
}

export default ImageViewer
