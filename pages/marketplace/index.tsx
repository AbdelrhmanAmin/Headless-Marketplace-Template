import React from 'react'
import { Card, Container, LinkItem, TitleAndMeta } from '@components/ui'
import type { ICard } from '@components/ui'
import ROUTES from '@constants/routes.json'
import marketplaceFetcher from 'lib/marketplaceFetcher'

export default function Marketplace({
  cards: serverCards,
}: {
  cards: ICard[]
}) {
  const [cards, setCards] = React.useState(serverCards)
  const timerRef: any = React.useRef(null)
  const currentPageRef = React.useRef(2)
  const lastCardRef = React.useRef(null)
  const [, trigger] = React.useReducer((prev) => !prev, false)
  const populateWithDummyCards = () => {
    const tmp = [...cards]
    const startingIndex = tmp.length
    const dummy20Cards = new Array(20).fill('').map((_card, i) => ({
      id: startingIndex + i + 1,
      name: 'Loading',
      isLoading: true,
      media: '',
      price: 0,
      status: 'unknown',
    }))
    setCards((prevCards) => [...prevCards, ...dummy20Cards])
    return startingIndex
  }
  const fetchAndHydrate = async (startingIndex: number) => {
    const data = await marketplaceFetcher(currentPageRef.current)
    currentPageRef.current += 1

    const resultCards = data.characters.results

    setCards((prev) => {
      for (let i = 0; i < 20; i++) {
        prev[startingIndex + i] = resultCards[i]
      }
      prev.splice(startingIndex, 20, ...resultCards)
      return prev
    })
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        const startingIndex = populateWithDummyCards()
        timerRef.current = setTimeout(() => {
          fetchAndHydrate(startingIndex)
          trigger()
        }, 2000)
      }
    })
    if (lastCardRef.current) {
      observer.observe(lastCardRef.current)
    }
  }, [lastCardRef])

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
        {cards.map((card) => {
          return (
            <LinkItem
              slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}
              key={card.id}
            >
              <Card {...card} />
            </LinkItem>
          )
        })}
        <div ref={lastCardRef} />
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
