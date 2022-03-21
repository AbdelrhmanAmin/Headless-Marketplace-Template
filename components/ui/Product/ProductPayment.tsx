import React from 'react'
import { Button } from '@components/ui'
import s from './Product.module.css'

const ProductPayment = () => {
  return (
    <div className={s.productPayment}>
      <div className="w-fit">
        <Button variant="primary" size="large" shape="block">
          Buy Now 💳
        </Button>
      </div>
    </div>
  )
}

export default ProductPayment
