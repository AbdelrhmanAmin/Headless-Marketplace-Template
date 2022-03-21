import React from 'react'
import { IProductPage } from './Product'
import { Coin } from '@components/icons'
import cn from 'classnames'
import s from './Product.module.css'

interface IProductHeader
  extends Pick<IProductPage, 'price' | 'name' | 'className' | 'isLoading'> {
  screen: 'desktop' | 'mobile'
}
const ProductHeader = ({
  price,
  name,
  isLoading,
  screen,
  className,
}: IProductHeader) => {
  const memoizedPrice = React.useMemo(
    () => Math.floor(Math.random() * 1000) + 1,
    []
  )
  return (
    <div className={cn(s.productHeader, screen && s[screen], className)}>
      <h1>{isLoading ? '--------' : name}</h1>
      <div className={s.priceContainer}>
        <span>
          <Coin />
        </span>
        <span>{isLoading ? '000' : price || memoizedPrice}</span>
      </div>
    </div>
  )
}

export default ProductHeader
