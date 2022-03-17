import { Card, LinkItem, SEO } from '@Components/UI'
import ROUTES from '@constants/routes.json'
import { Card as ICard } from '@Interfaces'

export default function Marketplace({ cards }: { cards: ICard[] }) {
  return (
    <>
      <SEO title={'Marketplace'} />
      <h1 className="text-center text-7xl font-semibold text-gray-800">
        [Marketplace]
      </h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <LinkItem
            slug={`${ROUTES.MARKETPLACE.slug}/${card.id}`}
            key={card.id}
          >
            <Card {...card} />
          </LinkItem>
        ))}
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
