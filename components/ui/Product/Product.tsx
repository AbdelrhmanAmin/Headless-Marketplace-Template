import React from 'react'
import { Stack, ImageViewer } from '@components/ui'
import { Coin } from '@components/icons'
import { useUI } from '@state'
import cn from 'classnames'
import s from './Product.module.css'

interface IProductDetails {
  id: number
  origin: { name: string }
  location: { name: string }
  species: string
  gender: string
}

const ProductDetails = ({ details }: { details: IProductDetails }) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📒 Details</strong>
      </div>
      <ul>
        {Object.entries(details).map(([key, value]) => {
          return (
            <li className="flex justify-between" key={key}>
              <span>{key}</span>
              <span className="text-gray-700">{value.name || value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const ProductDescription = () => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📒 Description</strong>
      </div>
      <div className={s.maxHeight}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          mollitia quos, harum, nulla quasi expedita quo architecto est aliquam
          dolores sapiente possimus consequuntur, dolor nostrum place.
        </p>
      </div>
    </div>
  )
}

interface IProductHeader
  extends Pick<IProductPage, 'price' | 'name' | 'className'> {
  screen: 'desktop' | 'mobile'
}
const ProductHeader = ({ price, name, screen, className }: IProductHeader) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  return (
    <div className={cn(s.productHeader, screen && s[screen], className)}>
      <h4>{name}</h4>
      <div className={s.priceContainer}>
        <span>
          <Coin />
        </span>
        <span>{price || memoizedPrice}</span>
      </div>
    </div>
  )
}

const ProductPreview = ({
  media,
  status,
}: Pick<IProductPage, 'media' | 'status' | 'className'>) => {
  const { openFullPreview } = useUI()
  return (
    <Stack className="rounded-lg shadow-lg overflow-hidden bg-yellow-800">
      <div role="button" onClick={() => openFullPreview(media)}>
        <ImageViewer variant="Product" media={media} />
      </div>
      <div className="flex items-center justify-between text-white bg-yellow-800 p-3">
        <p>
          <span>Status: </span>
          <span className={cn('font-semibold text-yellow-400')}>{status}</span>
        </p>
        <div role="button" onClick={() => openFullPreview(media)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1.3}
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
      </div>
    </Stack>
  )
}

export interface IProductPage extends IProductDetails {
  media: string
  name: string
  price: number
  status?: string
  className?: string
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
}: IProductPage) => {
  const details: IProductDetails = {
    id,
    gender,
    origin,
    location,
    species,
  }

  return (
    <section className="space-y-4">
      <div className={s.container}>
        <div className={s.leftColumn}>
          <ProductHeader
            name={name}
            price={price}
            screen="mobile"
            className="mb-4"
          />
          <ProductPreview media={media} status={status} />
        </div>
        <div className={s.rightColumn}>
          <ProductHeader name={name} price={price} screen="desktop" />
        </div>
      </div>
      <div className={s.container}>
        <div className={s.leftColumn}>
          <ProductDetails details={details} />
        </div>
        <div className={s.rightColumn}>
          <ProductDescription />
        </div>
      </div>
    </section>
  )
}

export default ProductPage
