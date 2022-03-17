import React from 'react'
import { LinkItem, Container } from '@Components/UI'
import { useRouter } from 'next/router'
import { navigation } from './constants'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className="bg-gray-700 py-2 text-white">
      <Container hasPaddingX className="flex">
        <div className="flex w-1/2 justify-start">
          <div className="flex space-x-4 text-xl font-medium">
            {navigation.map(({ slug, title }) => (
              <LinkItem
                variant="ghost"
                isActive={asPath === slug}
                slug={slug}
                key={slug}
              >
                {slug === '/' ? (
                  <div className="flex space-x-1">
                    <span>🔥</span>
                    <span>{title}</span>
                    <span>🔥</span>
                  </div>
                ) : (
                  title
                )}
              </LinkItem>
            ))}
          </div>
        </div>
        <div className="flex flex-shrink"></div>
        <div className="flex w-1/2 justify-end">
          <div className="flex">
            <LinkItem isExternal slug="https://github.com/AbdelrhmanAmin">
              <span className='bg-yellow-600 hover:bg-yellow-400 hover:text-yellow-100 transition-colors duration-500 text-xl px-4 rounded-lg font-medium'>@Abdo Amin</span>
            </LinkItem>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
