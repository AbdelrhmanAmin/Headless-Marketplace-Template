import React from 'react'
import { Stack, Badge } from '@components/ui'
import { Coin } from '@components/icons'
import s from './Card.module.css'
import ImageViewer from '../ImageViewer'

export interface ICard {
  id: number
  media: {
    url: string
  }
  name: string
  price: number
}

const Card = ({ media: { url }, name, price }: ICard) => {
  return (
    <div className={s.root}>
      <div className={s.nftImageContainer}>
        <ImageViewer media={url} alt={name} variant="Marketplace" />
        <div className="top-3 right-4 absolute">
          <Badge variant="live" size="tiny">
            <div className="flex space-x-1.5 px-0.5 min-w-[48px] text-white font-bold">
              {['🦁', '🐯', '🐺'].map((icon) => (
                <span
                  key={icon}
                  className="scale-100 hover:scale-150 duration-200 transition"
                >
                  {icon}
                </span>
              ))}
            </div>
          </Badge>
        </div>
      </div>
      <Stack className={s.cardBody}>
        <div className={s.cardDetails}>
          <Stack className="overflow-hidden">
            <h2 className={s.nftName}>{name}</h2>
          </Stack>
          <Stack>
            <div className="flex items-center space-x-1">
              <span className="text-gray-700">{price}</span>
              <span className="h-4 w-4">
                <Coin />
              </span>
            </div>
          </Stack>
        </div>
      </Stack>
    </div>
  )
}

export default Card
