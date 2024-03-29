import React from 'react'
import { Stack, Badge, ImageViewer, Skeleton } from '@components/ui'
import { Coin } from '@components/icons'
import s from './Card.module.css'
import cn from 'classnames'

export interface ICard {
  id: number
  media: string
  name: string
  price: number
  status: string
  isLoading?: boolean
  variant?: 'light' | 'dark'
}

const Card = ({
  media,
  name,
  price,
  status,
  isLoading = false,
  variant = 'light',
}: ICard) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  return (
    <div className={cn(s.root, variant && s[variant])}>
      <div className={s.nftImageContainer}>
        <ImageViewer
          isLoading={isLoading}
          childClassName="rounded-md"
          media={media}
          alt={name}
          variant="Marketplace"
        />
        <div className={s.badge}>
          <Badge variant="live" size="tiny">
            <div className="text-white font-bold h-3.5 w-12">
              {isLoading ? (
                <div className="items-center justify-center flex h-full w-full">
                  <Skeleton className="h-2 rounded-md" />
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
          <Stack>
            {isLoading ? (
              <div className="pr-8">
                <Skeleton className={s.skeleton} />
              </div>
            ) : (
              <h2 className={s.cardName}>{name}</h2>
            )}
          </Stack>

          <Stack>
            {isLoading ? (
              <Skeleton className={s.skeleton} />
            ) : (
              <div className={s.cardPriceContainer}>
                <span className={s.cardPrice}>{price || memoizedPrice}</span>
                <span className={s.coin}>
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
