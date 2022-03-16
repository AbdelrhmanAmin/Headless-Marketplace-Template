import React from 'react'
import { Stack } from '../index'
import { Card as ICard } from '../../../Interfaces'
import { Coin } from '../../icons'
import s from './Card.module.css'

const Card = ({ cardMedia, name, price }: ICard) => {
  return (
    <div className={s.root}>
      <div className={s.nftImageContainer}>
        <div>
          <img src={cardMedia.url} alt={name} />
        </div>
      </div>
      <Stack className={s.cardBody}>
        <div className={s.cardDetails}>
          <Stack className="overflow-hidden">
            <h2 className={s.nftName}>{name}</h2>
          </Stack>
          <Stack>
            <div className="flex items-center space-x-1">
              <span>{price}</span>
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
