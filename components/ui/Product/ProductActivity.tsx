import React from 'react'
import cn from 'classnames'
import s from './Product.module.css'
import ProductBoxSkeleton from './ProductBoxSkeleton'
import { IProductPage } from './Product'

const ProductActivity = ({
  episode,
  isLoading,
}: Pick<IProductPage, 'episode' | 'isLoading' | 'className'>) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📈 Activity</strong>
      </div>
      <ul className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton num={10} />
        ) : (
          episode &&
          episode.map(({ name }) => {
            return (
              <li key={name}>
                <span>Episode Name:</span>
                <span>{name}</span>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default ProductActivity
