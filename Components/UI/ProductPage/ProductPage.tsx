import React from 'react'
import { Stack, ImageViewer } from '@Components/UI'
import { Coin } from '@Components/icons'

interface IProductPage {
  media: { url: string }
  name: string
  price: number
}

const ProductPage = ({ media, name, price }: IProductPage) => {
  return (
    <section>
      <div className="flex items-center justify-evenly">
        <div className="lg:w-5/12">
          <Stack>
            <ImageViewer variant="Product" media={media.url} />
          </Stack>
        </div>
        <div className="flex flex-col w-1/2 mt-12">
          <Stack className="space-y-3 text-white">
            <h3 className="text-7xl">{name}</h3>
            <div className="flex items-center space-x-2 bg-yellow-600 py-1 px-4 w-fit rounded-md shadow-md">
              <span className="w-9 h-9">
                <Coin />
              </span>
              <span className="text-5xl">{price}</span>
            </div>
          </Stack>
          <Stack className="mt-14">
            <div className="shadow hover:shadow-lg transition-shadow duration-200 rounded-md h-60 border-2 border-yellow-700 bg-yellow-600">
              <div className="flex items-center justify-center h-full w-full text-xl">
                Coming soon...
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
