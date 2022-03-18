import React from 'react'
import { Stack, Badge, ImageViewer } from '@components/ui'
import { Coin } from '@components/icons'
import s from './Card.module.css'
import generateEmojis from 'utils/generateEmojis'

export interface ICard {
  id: number
  media: string
  name: string
  price: number
  isLoading?: boolean
}

const Card = ({ media, name, price, isLoading = false }: ICard) => {
  return (
    <div className={s.root}>
      <div className={s.nftImageContainer}>
        <ImageViewer
          isLoading={isLoading}
          media={media}
          alt={name}
          variant="Marketplace"
        />
        <div className="top-3 right-4 absolute">
          <Badge variant="live" size="tiny">
            <div className="text-white font-bold h-3.5 w-24">
              {isLoading ? (
                <div className="space-x-2 justify-center flex p-px pb-0.5 h-full w-full">
                  {new Array(4).fill('').map((v, k) => (
                    <div
                      className="w-3 h-full bg-gray-600 rounded-md animate-pulse"
                      key={k}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex space-x-1.5 px-0.5 justify-center h-full w-full">
                  {generateEmojis(4).map((icon, i) => (
                    <span
                      key={i}
                      className="scale-100 hover:scale-150 duration-200 transition"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Badge>
        </div>
      </div>
      <Stack className={s.cardBody}>
        <div className={s.cardDetails}>
          <Stack className="overflow-hidden">
            {isLoading ? (
              <div className="w-full h-3.5 bg-gray-600 rounded-md animate-pulse mt-1" />
            ) : (
              <h2 className={s.nftName}>{name}</h2>
            )}
          </Stack>
          {price && (
            <Stack>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700">{price}</span>
                <span className="h-4 w-4">
                  <Coin />
                </span>
              </div>
            </Stack>
          )}
        </div>
      </Stack>
    </div>
  )
}

export default Card
