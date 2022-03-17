import React from 'react'
import type { Card as ICard } from '@Interfaces'
import { Card } from '@Components/UI'

const Product = ({ card }: { card: ICard }) => {
  return (
    <>
      <Card {...card} />
    </>
  )
}

interface PageContext {
  params: { id: string }
  fallback?: boolean
}
export const getStaticPaths = async () => {
  const result = await fetch(
    'https://graphql.contentful.com/content/v1/spaces/zasyld3jc6mz/environments/master',
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
  const staticPaths: { params: { id: string } }[] = []

  if (!result.ok) {
    console.error(result)
    return staticPaths
  }

  const { data } = await result.json()
  const cards = data.cardCollection.items
  cards.forEach(({ id }: ICard) =>
    staticPaths.push({ params: { id: `${id}` } })
  )
  return {
    paths: staticPaths,
    fallback: false,
  }
}

export const getStaticProps = async (context: PageContext) => {
  const { id } = context.params
  const result = await fetch(
    'https://graphql.contentful.com/content/v1/spaces/zasyld3jc6mz/environments/master',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `  query Product($ID: Int = ${id}){
          cardCollection(
          where: {id: $ID}
          ) {
            items {
              id
              media {
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
  const card = data.cardCollection.items[0]

  return {
    props: { card },
  }
}
export default Product