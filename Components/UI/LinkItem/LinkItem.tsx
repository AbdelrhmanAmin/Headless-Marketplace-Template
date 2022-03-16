import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface LinkItemPropsInterface {
  href: string
  className: string
  onClick?: () => {}
  children: React.ReactChildren
}

const LinkItem = ({
  children,
  href,
  className,
  ...rest
}: LinkItemPropsInterface) => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (rest.onClick) {
      handleOnClick(e)
    }
  }
  const rootClass = cn(className)
  return (
    <Link href={href}>
      <a className={rootClass} onClick={handleOnClick} role="button" {...rest}>
        {children}
      </a>
    </Link>
  )
}
