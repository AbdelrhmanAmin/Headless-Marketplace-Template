import React from 'react'
import { LinkItem } from '@Components/UI'
import { useRouter } from 'next/router'
import { navigation } from './constants'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className="min-h-[60px] bg-gray-700 px-24 py-2 text-white">
      <div className="flex w-1/2">
        <div className="flex space-x-4 text-2xl">
          {navigation.map(({ slug, title }) => (
            <LinkItem
              variant="ghost"
              isActive={asPath === slug}
              slug={slug}
              key={slug}
            >
              {`[${title}]`}
            </LinkItem>
          ))}
        </div>
      </div>
      <div className="flex flex-shrink"></div>
      <div className="flex w-1/2"></div>
    </header>
  )
}

export default Header
