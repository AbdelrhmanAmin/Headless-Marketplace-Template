import React from 'react'
import { IProductPage } from './Product'
import { Stack, ImageViewer } from '@components/ui'
import { useUI } from '@state'
import s from './Product.module.css'

const ProductPreview = ({
  media,
  status,
  isLoading,
}: Pick<IProductPage, 'media' | 'status' | 'className' | 'isLoading'>) => {
  const { openFullPreview } = useUI()
  return (
    <Stack className={s.productPreview}>
      <div role="button" onClick={() => !isLoading && openFullPreview(media)}>
        <ImageViewer variant="Product" media={media} isLoading={isLoading} />
      </div>
      <div className={s.productPreviewBar}>
        <div>
          <span>Status: </span>
          <span className="font-semibold text-yellow-400">
            {isLoading ? '----' : status}
          </span>
        </div>
        <div role="button" onClick={() => !isLoading && openFullPreview(media)}>
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
  )
}

export default ProductPreview
