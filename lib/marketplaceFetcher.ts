const marketplaceFetcher = async (page: number = 1) => {
  const result = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query {
            characters(page: ${page}){
              results{
                id
                name
                media:image
                status
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
  return data
}

export default marketplaceFetcher
