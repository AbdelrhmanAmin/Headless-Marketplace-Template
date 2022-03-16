import React from 'react'
import { LinkItem } from '@Components/UI'
const Header = () => {
  return (
    <header className="min-h-[60px] bg-gray-900 px-24 py-2 text-white">
      <div className="flex w-1/2">
        <div className="flex space-x-4 text-2xl">
          <LinkItem href="/">[Logo]</LinkItem>
          <LinkItem href="/marketplace">[Marketplace]</LinkItem>
        </div>
      </div>
      <div className="flex flex-shrink"></div>
      <div className="flex w-1/2"></div>
    </header>
  )
}

export default Header
