import React from 'react'
import { Card, Container, LinkItem, SEO } from 'sdf/UI'
import type { ICard } from 'sdf/UI'
import ROUTES from '@constants/routes.json'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  const cardsRef = React.useRef(cards.slice(0, 8))
  const [isLoading, setLoading] = React.useState(false)
  const lastCardRef = React.useRef(null)
  React.useEffect(() => {
    if (lastCardRef.current) {
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        setLoading(isIntersecting)
      })
      observer.observe(lastCardRef.current)
    }
  }, [lastCardRef.current])
  React.useEffect(() => {
    cardsRef.current.push(...cards.slice(0, 8))
  }, [isLoading])
  return (
    <Container hasPaddingX hasPaddingY>
      <SEO title={'Marketplace'} />
      <h1 className="text-center text-7xl font-semibold text-gray-800">
        [Marketplace]
      </h1>
      <div className="mt-10 grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {cardsRef.current.map((card, i) => {
          if (i === cardsRef.current.length - 1) {
            return (
              <div ref={lastCardRef} className="w-full h-full" key={i}>
                <LinkItem slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}>
                  <Card {...card} />
                </LinkItem>
              </div>
            )
          }
          return (
            <LinkItem slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`} key={i}>
              <Card {...card} />
            </LinkItem>
          )
        })}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          cardCollection {
            items {
              id
              media: cardMedia{
                url
              }
              name
              price
            }
          }
        }
        `,
      }),
    }
  )

  if (!result.ok) {
    console.error(result)
    return {}
  }

  const { data } = await result.json()
  const cards = data.cardCollection.items

  return {
    props: { cards },
  }
}
