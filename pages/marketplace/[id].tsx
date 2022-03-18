import React from 'react'
import { ProductPage, Container } from '@components/ui'
import type { ICard } from '@components/ui'

const Product = ({ card }: { card: ICard }) => {
  return (
    <Container hasPaddingX hasPaddingY>
      <ProductPage {...card} />
    </Container>
  )
}

interface PageContext {
  params: { id: string }
  fallback?: boolean
}
export const getStaticPaths = async () => {
  const result = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          characters{
            results{
              id
            }
          }
        }
        
        `,
    }),
  })

  const { data } = await result.json()
  const cards = data.characters.results

  const staticPaths: { params: { id: string } }[] = []

  if (!result.ok) {
    console.error(result)
    return staticPaths
  }

  cards.forEach(({ id }: ICard) =>
    staticPaths.push({ params: { id: `${id}` } })
  )
  return {
    paths: staticPaths,
    fallback: true,
  }
}

export const getStaticProps = async (context: PageContext) => {
  const { id } = context.params
  const result = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query ($ID:ID = ${id}) {
        character(id: $ID) {
          id
          name
          gender
          media: image
          origin{
            name
            dimension
          }
          location{
            name
            dimension
          }
          species
          status
        }
      }      
      `,
    }),
  })

  if (!result.ok) {
    console.error(result)
    return {}
  }

  const { data } = await result.json()
  const card = data.character

  return {
    props: { card },
  }
}
export default Product
