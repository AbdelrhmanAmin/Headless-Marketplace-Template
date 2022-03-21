import React from 'react'
import { LinkItem, Container } from '@components/ui'
import { useRouter } from 'next/router'
import { PRODUCTS } from '@constants/common'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className="bg-gray-700 py-2 text-white">
      <Container hasPaddingX className="flex">
        <div className="flex w-1/2 justify-start">
          <div className="flex space-x-4 text-xl font-medium">
            <LinkItem slug="/">[LOGO]</LinkItem>
            {PRODUCTS.map(({ slug, name }) => (
              <LinkItem
                variant="ghost"
                isActive={asPath === slug}
                slug={slug}
                key={slug}
              >
                {name}
              </LinkItem>
            ))}
          </div>
        </div>
        <div className="flex flex-shrink"></div>
        <div className="flex w-1/2 justify-end">
          <div className="flex space-x-2">
            <LinkItem
              isExternal
              variant="primary"
              slug="https://github.com/AbdelrhmanAmin"
            >
              <span className="text-xl rounded-lg font-medium">🐺</span>
            </LinkItem>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
