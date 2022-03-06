import React from 'react'
import { Stack } from '../index'
import { Card as ICard } from '../../Interfaces'
import s from './Card.module.css'

const Card = ({ cardMedia, name, price }: ICard) => {
  console.log(cardMedia)
  return (
    <div className={s.root}>
      <div className={s.nftImageContainer}>
        <img src={cardMedia.url} alt={name} />
      </div>
      <Stack className={s.cardBody}>
        <div className={s.cardDetails}>
          <Stack className="overflow-hidden">
            <h2 className={s.nftName}>{name}</h2>
          </Stack>
          <Stack>
            <span>{price}</span>
          </Stack>
        </div>
      </Stack>
    </div>
  )
}

export default Card
