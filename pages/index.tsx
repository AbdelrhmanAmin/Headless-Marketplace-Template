import Head from 'next/head'
import { Card } from '../Components'
import { Card as ICard } from '../Interfaces'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-7xl">Hello.</h1>
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
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
          cardCollection{
            items{
              cardMedia{
                url
              }
              name
              price
            }
          }
          
        }`,
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
