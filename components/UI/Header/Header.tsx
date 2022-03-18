import React from 'react'
import { LinkItem, Container } from '@components/UI'
import { useRouter } from 'next/router'
import { navigation } from './constants'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className="bg-gray-700 py-2 text-white">
      <Container hasPaddingX className="flex">
        <div className="flex w-1/2 justify-start">
          <div className="flex space-x-4 text-xl font-medium">
            <LinkItem slug='/'>
              [LOGO]
            </LinkItem>
            {navigation.map(({ slug, title }) => (
              <LinkItem
                variant="ghost"
                isActive={asPath === slug}
                slug={slug}
                key={slug}
              >
                {title}
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
