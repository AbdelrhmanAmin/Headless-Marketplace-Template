import React from 'react'
import type { ICard } from '@components/ui'
import cn from 'classnames'
import s from './Product.module.css'
import CollectionGrid from './CollectionGrid'
import ProductPayment from './ProductPayment'
import ProductDescription from './ProductDescription'
import ProductHeader from './ProductHeader'
import ProductActivity from './ProductActivity'
import ProductPreview from './ProductPreview'
import ProductDetails, { IProductDetails } from './ProductDetails'

export interface IProductPage extends IProductDetails {
  media: string
  name: string
  price: number
  status?: string
  className?: string
  episode: { name: string }[]
  isLoading?: boolean
}

const ProductPage = ({
  media,
  name,
  price,
  status,
  id,
  gender,
  origin,
  location,
  species,
  episode,
  created,
  isLoading,
  cards,
}: IProductPage & { cards: ICard[] }) => {
  const details: IProductDetails = {
    id,
    gender,
    origin,
    location,
    species,
    created,
  }

  return (
    <section className="space-y-4">
      <div className={s.container}>
        <div className={cn(s.centered, s.leftColumn)}>
          <ProductHeader
            isLoading={isLoading}
            name={name}
            price={price}
            screen="mobile"
            className="mb-4"
          />
          <div className="w-fit mx-auto">
            <ProductPreview
              media={media}
              status={status}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className={cn(s.rightColumn)}>
          <ProductHeader
            name={name}
            price={price}
            screen="desktop"
            isLoading={isLoading}
          />
          <ProductPayment />
          <ProductDescription isLoading={isLoading} />
        </div>
      </div>
      <div className={s.container}>
        <div className={cn(s.centered, s.leftColumn)}>
          <ProductDetails details={details} isLoading={isLoading} />
        </div>
        <div className={cn(s.centered, s.rightColumn)}>
          <ProductActivity episode={episode} isLoading={isLoading} />
        </div>
      </div>
      {cards && (
        <div className={s.container}>
          <div className={cn(s.centered, s.middle)}>
            <CollectionGrid cards={cards} isLoading={isLoading} />
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductPage
