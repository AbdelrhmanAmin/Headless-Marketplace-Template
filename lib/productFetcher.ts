const productFetcher = async (id?: number | string) => {
  const body = { query: '' }
  if (id) {
    body['query'] = `
    query ($ID:ID = ${id}) {
      character(id: $ID) {
        id
        name
        created
        gender
        media: image
        origin {
          name
        }
        location {
          name
        }
        species
        status
        episode {
          name
        }
      }
      characters {
        results {
          id
          name
          media: image
          status
        }
      }
    }`
  } else {
    body['query'] = `query {
      characters{
        results{
          id
        }
      }
    }`
  }
  const result = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!result.ok) {
    return 'error'
  }
  const { data } = await result.json()
  return data
}

export default productFetcher
