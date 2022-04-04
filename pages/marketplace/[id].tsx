import React from 'react'
import { Product, Container, TitleAndMeta } from '@components/ui'
import type { ICard, IProductPage } from '@components/ui'
import { useRouter } from 'next/router'
import productFetcher from 'lib/productFetcher'

const ProductPage = ({
  product,
  cards,
}: {
  product: IProductPage
  cards: ICard[]
}) => {
  const router = useRouter()
  const isLoading = router.isFallback
  return (
    <>
      <TitleAndMeta title={product?.name || '[Product Name]'} />
      <Container hasPaddingX hasPaddingY>
        <Product cards={cards} {...product} isLoading={isLoading} />
      </Container>
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await productFetcher()

  const staticPaths: { params: { id: string } }[] = []

  if (data === 'error') {
    return staticPaths
  }

  const cards = data.characters.results
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
  const data = await productFetcher(id)

  console.log(data)
  if (data === 'error') {
    return {}
  }

  const product = data.character
  const cards = data.characters.results

  return {
    props: { product, cards },
  }
}
export default ProductPage
