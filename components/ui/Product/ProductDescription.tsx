import React from 'react'
import ProductBoxSkeleton from './ProductBoxSkeleton'
import s from './Product.module.css'
import { IProductPage } from './Product'

const ProductDescription = ({
  isLoading,
}: Pick<IProductPage, 'isLoading' | 'className'>) => {
  return (
    <div className={s.productBox}>
      <div>
        <strong>📜 Description</strong>
      </div>
      <div className={s.maxHeight}>
        {isLoading ? (
          <ProductBoxSkeleton />
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            mollitia quos, harum, nulla quasi expedita quo architecto est
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
            aliquam dolores sapiente possimus consequuntur, dolor nostrum place.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductDescription
