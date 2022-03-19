import React from 'react'
import { Stack, ImageViewer } from '@components/ui'
import { Coin } from '@components/icons'
import { useUI } from '@state'
import cn from 'classnames'

interface IProductPage {
  media: string
  name: string
  status?: string
  price: number
}

const ProductPage = ({ media, name, price, status }: IProductPage) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  const { openFullPreview } = useUI()
  return (
    <section>
      <div className="flex items-center justify-evenly">
        <div className="lg:w-5/12">
          <Stack className="rounded-lg shadow-lg overflow-hidden bg-yellow-800">
            <div role="button" onClick={() => openFullPreview(media)}>
              <ImageViewer variant="Product" media={media} />
            </div>
            <div className="flex items-center justify-between text-white bg-yellow-800 p-3">
              <p>
                <span>Status: </span>
                <span className={cn('font-semibold text-yellow-400')}>
                  {status}
                </span>
              </p>
              <div role="button" onClick={() => openFullPreview(media)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={1.3}
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
            </div>
          </Stack>
        </div>
        <div className="flex flex-col w-1/2">
          <Stack className="space-y-3 text-white">
            <h3 className="text-7xl">{name}</h3>
            <div className="flex items-center space-x-2 bg-yellow-600 py-1 px-4 w-fit rounded-md shadow-md">
              <span className="w-9 h-9">
                <Coin />
              </span>
              <span className="text-5xl">{price || memoizedPrice}</span>
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
