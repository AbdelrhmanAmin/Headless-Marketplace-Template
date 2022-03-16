import Head from 'next/head'
import { Card } from '../Components/UI'
import { Card as ICard } from '../Interfaces'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  return (
    <div className="flex min-h-screen bg-gray-200 flex-col items-center py-2">
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-7xl">Marketplace</h1>
        <div className="mt-10 flex gap-4">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </div>
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
