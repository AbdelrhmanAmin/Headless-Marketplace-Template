import React from 'react'
import { Stack, Badge, ImageViewer } from '@components/ui'
import { Coin } from '@components/icons'
import s from './Card.module.css'

export interface ICard {
  id: number
  media: string
  name: string
  price: number
  status: string
  isLoading?: boolean
}

const Card = ({ media, name, price, status, isLoading = false }: ICard) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  return (
    <div className={s.root}>
      <div className={s.nftImageContainer}>
        <ImageViewer
          isLoading={isLoading}
          childClassName="rounded-md"
          media={media}
          alt={name}
          variant="Marketplace"
        />
        <div className="top-3 right-4 absolute">
          <Badge variant="live" size="tiny">
            <div className="text-white font-bold h-3.5 w-12">
              {isLoading ? (
                <div className="items-center justify-center flex h-full w-full">
                  <div className="w-16 h-2 bg-gray-600 rounded-full animate-pulse" />
                </div>
              ) : (
                <span>{status}</span>
              )}
            </div>
          </Badge>
        </div>
      </div>
      <Stack className={s.cardBody}>
        <div className={s.cardDetails}>
          <Stack className="overflow-hidden">
            {isLoading ? (
              <div className="w-full h-3.5 bg-gray-600 rounded-md animate-pulse mt-1 pr-8" />
            ) : (
              <h2 className={s.nftName}>{name}</h2>
            )}
          </Stack>

          <Stack>
            {isLoading ? (
              <div className="flex w-full items-center space-x-1 pl-4">
                <div className="w-full h-3.5 bg-gray-600 rounded-md animate-pulse mt-1" />
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <span className="text-gray-700">{price || memoizedPrice}</span>
                <span className="h-4 w-4">
                  <Coin />
                </span>
              </div>
            )}
          </Stack>
        </div>
      </Stack>
    </div>
  )
}

export default Card
