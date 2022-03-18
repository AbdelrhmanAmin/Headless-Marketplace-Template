import React from 'react'
import { Stack, ImageViewer } from '@components/ui'
import { Coin } from 'components/icons'

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
            <div className="rounded-md border-2 overflow-hidden border-yellow-700 bg-yellow-600">
              <div>
                <div className="pl-5 py-2 text-xl text-white">
                  <strong>📒 Description</strong>
                </div>
                <div className="overflow-y-auto max-h-52 h-52 p-5 pt-2 bg-white">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa mollitia quos, harum, nulla quasi expedita quo
                    architecto est aliquam dolores sapiente possimus
                    consequuntur, dolor nostrum place.
                  </p>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
