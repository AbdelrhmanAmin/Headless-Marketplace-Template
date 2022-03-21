import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './LinkItem.module.css'
interface LinkItemPropsInterface {
  slug: string
  variant?: 'primary' | 'ghost'
  className?: string
  isActive?: boolean
  isExternal?: true
  onClick?: () => {}
  children: React.ReactNode | string
  isRounded?: boolean
}

const LinkItem = ({
  children,
  slug,
  className,
  isActive,
  isExternal,
  variant,
  isRounded = true,
  ...rest
}: LinkItemPropsInterface) => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur()
    if (rest.onClick) {
      handleOnClick(e)
    }
  }
  const rootClass = cn(
    s.root,
    variant && s[variant],
    { [s.active]: isActive },
    { 'rounded-md': isRounded },
    className
  )
  if (isExternal) {
    return (
      <a
        className={rootClass}
        href={slug}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOnClick}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={slug}>
      <a className={rootClass} onClick={handleOnClick} role="button" {...rest}>
        {children}
      </a>
    </Link>
  )
}

export default LinkItem
