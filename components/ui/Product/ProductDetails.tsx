import React from 'react'
import ProductBoxSkeleton from './ProductBoxSkeleton'
import s from './Product.module.css'
import formatDate from 'utils/formatDate'

export interface IProductDetails {
  id: number
  origin: { name: string }
  location: { name: string }
  species: string
  gender: string
  created: string
}

const ProductDetails = ({
  details,
  isLoading,
}: {
  details: IProductDetails
  isLoading?: boolean
}) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📒 Details</strong>
      </div>
      <ul className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton num={10} />
        ) : (
          Object.entries(details).map(([key, value]) => {
            let val
            if (typeof value === 'object') {
              val = value.name
            } else {
              if (key === 'created') {
                val = formatDate(value)
              } else {
                val = value
              }
            }
            return (
              <li key={key}>
                <span>{key}</span>
                <span>{val}</span>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default ProductDetails
