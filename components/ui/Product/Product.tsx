import React from 'react'
import { Stack, ImageViewer, Button } from '@components/ui'
import { Coin } from '@components/icons'
import { useUI } from '@state'
import cn from 'classnames'
import s from './Product.module.css'
import formatDate from 'utils/formatDate'
import Skeleton from '../Skeleton'

const CollectionGrid = () => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📚 Collection</strong>
      </div>
      <div>{/* <Card /> */}</div>
    </div>
  )
}

const ProductPayment = () => {
  return (
    <div className={s.productPayment}>
      <div className="w-fit">
        <Button>Buy Now 💳</Button>
      </div>
    </div>
  )
}
interface IProductDetails {
  id: number
  origin: { name: string }
  location: { name: string }
  species: string
  gender: string
  created: string
}

const ProductDetails = ({
  details,
  isLoading,
}: {
  details: IProductDetails
  isLoading?: boolean
}) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📒 Details</strong>
      </div>
      <ul className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton num={10} />
        ) : (
          Object.entries(details).map(([key, value]) => {
            let val
            if (typeof value === 'object') {
              val = value.name
            } else {
              if (key === 'created') {
                val = formatDate(value)
              } else {
                val = value
              }
            }
            return (
              <li className="flex justify-between" key={key}>
                <span>{key}</span>
                <span className="text-gray-700">{val}</span>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

const ProductBoxSkeleton = ({ num = 5 }: { num?: number }) => {
  const skeletons = new Array(num).fill('')
  return (
    <>
      {skeletons.map((v, k) => {
        return (
          <div className="py-2" key={k}>
            <div className="h-2">
              <Skeleton />
            </div>
          </div>
        )
      })}
    </>
  )
}

const ProductActivity = ({
  episode,
  isLoading,
}: Pick<IProductPage, 'episode' | 'isLoading' | 'className'>) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📈 Activity</strong>
      </div>
      <ul className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton num={10} />
        ) : (
          episode &&
          episode.map(({ name }) => {
            return (
              <li className="flex justify-between" key={name}>
                <span>Episode Name:</span>
                <span className="text-gray-700">{name}</span>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

const ProductDescription = ({
  isLoading,
}: Pick<IProductPage, 'isLoading' | 'className'>) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📜 Description</strong>
      </div>
      <div className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton />
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            mollitia quos, harum, nulla quasi expedita quo architecto est
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
          </p>
        )}
      </div>
    </div>
  )
}

interface IProductHeader
  extends Pick<IProductPage, 'price' | 'name' | 'className' | 'isLoading'> {
  screen: 'desktop' | 'mobile'
}
const ProductHeader = ({
  price,
  name,
  isLoading,
  screen,
  className,
}: IProductHeader) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  return (
    <div className={cn(s.productHeader, screen && s[screen], className)}>
      <h1>
        {isLoading ? (
          <div
            className={cn(
              screen === 'desktop' ? 'h-20 -mb-2 w-96' : 'h-10 w-full'
            )}
          >
            <Skeleton />
          </div>
        ) : (
          name
        )}
      </h1>
      <div className={s.priceContainer}>
        <span>
          <Coin />
        </span>
        <span>
          {isLoading ? (
            <div
              className={cn(
                screen === 'desktop'
                  ? 'w-20 -mr-2 h-12 flex'
                  : 'flex h-7 w-7 mr-0.5'
              )}
            >
              <Skeleton />
            </div>
          ) : (
            price || memoizedPrice
          )}
        </span>
      </div>
    </div>
  )
}

const ProductPreview = ({
  media,
  status,
  isLoading,
}: Pick<IProductPage, 'media' | 'status' | 'className' | 'isLoading'>) => {
  const { openFullPreview } = useUI()
  return (
    <Stack className="rounded-lg shadow-lg overflow-hidden">
      <div role="button" onClick={() => !isLoading && openFullPreview(media)}>
        <ImageViewer variant="Product" media={media} isLoading={isLoading} />
      </div>
      <div className="flex items-center justify-between text-white bg-yellow-800 p-3">
        <div className="flex items-center space-x-2">
          <span>Status: </span>
          <>
            {isLoading ? (
              <div className="inline-flex items-center w-12 h-3">
                <Skeleton />
              </div>
            ) : (
              <span className="font-semibold text-yellow-400">{status}</span>
            )}
          </>
        </div>
        <div role="button" onClick={() => !isLoading && openFullPreview(media)}>
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
}: IProductPage) => {
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
        <div className={s.leftColumn}>
          <ProductHeader
            isLoading={isLoading}
            name={name}
            price={price}
            screen="mobile"
            className="mb-4"
          />
          <ProductPreview media={media} status={status} isLoading={isLoading} />
        </div>
        <div className={s.rightColumn}>
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
        <div className={s.leftColumn}>
          <ProductDetails details={details} isLoading={isLoading} />
        </div>
        <div className={s.rightColumn}>
          <ProductActivity episode={episode} isLoading={isLoading} />
        </div>
      </div>
      <div className={s.container}>
        <div className={s.middle}>
          <CollectionGrid />
        </div>
      </div>
    </section>
  )
}

export default ProductPage
