import React from 'react'
import { Product, Container, TitleAndMeta } from '@components/ui'
import type { ICard, IProductPage } from '@components/ui'
import { useRouter } from 'next/router'

const ProductPage = ({ product }: { product: IProductPage }) => {
  const router = useRouter()
  const isLoading = router.isFallback
  return (
    <>
      <TitleAndMeta title={product?.name || '[Product Name]'} />
      <Container hasPaddingX hasPaddingY>
        <Product {...product} isLoading={true} />
      </Container>
    </>
  )
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

interface PageContext {
  params: { id: string }
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
          created
          gender
          media: image
          origin{
            name
          }
          location{
            name
          }
          species
          status
          episode {
            name
          }
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
  const product = data.character

  return {
    props: { product },
  }
}
export default ProductPage
