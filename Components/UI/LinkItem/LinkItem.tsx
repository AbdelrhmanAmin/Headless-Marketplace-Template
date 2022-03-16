import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './LinkItem.module.css'
interface LinkItemPropsInterface {
  slug: string
  className?: string
  isActive?: boolean
  onClick?: () => {}
  children: React.ReactChildren | string
}

const LinkItem = ({
  children,
  slug,
  className,
  isActive,
  ...rest
}: LinkItemPropsInterface) => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (rest.onClick) {
      handleOnClick(e)
    }
  }
  const rootClass = cn(s.root, s.ghost, { [s.active]: isActive }, className)
  return (
    <Link href={slug}>
      <a className={rootClass} onClick={handleOnClick} role="button" {...rest}>
        <span className='flex items-center'>{children}</span>
      </a>
    </Link>
  )
}

export default LinkItem
