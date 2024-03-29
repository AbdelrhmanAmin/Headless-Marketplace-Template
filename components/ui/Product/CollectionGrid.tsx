import React from 'react'
import { Card, LinkItem } from '@components/ui'
import type { ICard } from '@components/ui'
import ROUTES from '@constants/routes.json'
import s from './Product.module.css'

const CollectionGrid = ({
  cards,
  isLoading,
}: {
  cards: ICard[]
  isLoading?: boolean
}) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📚 Collection</strong>
      </div>
      <div className={s.collection}>
        {cards.map((card) => (
          <LinkItem
            slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}
            key={card.id}
          >
            <Card variant="light" {...card} isLoading={isLoading} />
          </LinkItem>
        ))}
      </div>
    </div>
  )
}

export default CollectionGrid
