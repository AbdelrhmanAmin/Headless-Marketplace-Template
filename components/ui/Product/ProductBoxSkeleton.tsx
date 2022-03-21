import React from 'react'
import { Skeleton } from '@components/ui'

const ProductBoxSkeleton = ({ num = 5 }: { num?: number }) => {
  const skeletons = new Array(num).fill('')
  return (
    <>
      {skeletons.map((v, k) => {
        return (
          <div className="py-2" key={k}>
            <div className="h-2">
              <Skeleton />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductBoxSkeleton
