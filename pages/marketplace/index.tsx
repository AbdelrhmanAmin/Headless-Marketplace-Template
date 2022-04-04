import React from 'react'
import { Card, Container, LinkItem, TitleAndMeta } from '@components/ui'
import type { ICard } from '@components/ui'
import ROUTES from '@constants/routes.json'
import marketplaceFetcher from 'lib/marketplaceFetcher'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  const cardsRef = React.useRef(cards)
  const timerRef: any = React.useRef(null)
  const currentPageRef = React.useRef(2)
  const lastCardRef = React.useRef(null)
  const populateWithDummyCards = () => {
    const tmp = [...cardsRef.current]
    const startingIndex = tmp.length
    cardsRef.current.push(
      ...new Array(20).fill('').map((card, i) => {
        card = {
          id: startingIndex + i + 1,
          name: 'Loading',
          isLoading: true,
          media: '',
        }
        return card
      })
    )
    return startingIndex
  }
  const fetchAndHydrate = async (startingIndex: number) => {
    const data = await marketplaceFetcher(currentPageRef.current)
    currentPageRef.current += 1

    const cards = data.characters.results
    for (let i = 0; i < 20; i++) {
      cardsRef.current[startingIndex + i] = cards[i]
    }
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting, target }]) => {
        if (isIntersecting) {
          const startingIndex = populateWithDummyCards()
          observer.unobserve(target)
          timerRef.current = setTimeout(() => {
            fetchAndHydrate(startingIndex)
          }, 2000)
        }
      }
    )
    if (lastCardRef.current) {
      observer.observe(lastCardRef.current)
    }
  }, [lastCardRef.current])

  React.useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [])
  return (
    <Container hasPaddingX hasPaddingY>
      <TitleAndMeta title={'Marketplace'} />
      <div>
        <h1 className="text-center text-4xl sm:text-7xl font-semibold text-gray-800">
          [Marketplace]
        </h1>

        <p className="text-center text-lg mt-4">Scroll to infinity!</p>
      </div>
      <div className="mt-4 grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {cardsRef.current.map((card, i) => {
          if (i === cardsRef.current.length - 1) {
            return (
              <div ref={lastCardRef} className="w-full h-full" key={card.id}>
                <LinkItem slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}>
                  <Card {...card} />
                </LinkItem>
              </div>
            )
          }
          return (
            <LinkItem
              slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}
              key={card.id}
            >
              <Card {...card} />
            </LinkItem>
          )
        })}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const data = await marketplaceFetcher(1)
  const cards = data.characters.results

  return {
    props: { cards },
  }
}
