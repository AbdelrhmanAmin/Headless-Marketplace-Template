import { Card, LinkItem, SEO } from '@Components/UI'
import { MARKETPLACE } from '@constants/routes.json'
import { Card as ICard } from '@Interfaces'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  return (
    <>
      <SEO title={'Marketplace'} />
      <div className="flex min-h-screen flex-col items-center py-2">
        <main className="flex flex-col items-center">
          <h1 className="text-7xl font-semibold text-gray-800">Marketplace</h1>
          <div className="mt-10 grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <LinkItem slug={`${MARKETPLACE.slug}/${card.id}`} key={card.id}>
                <Card {...card} />
              </LinkItem>
            ))}
          </div>
        </main>
      </div>
    </>
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
