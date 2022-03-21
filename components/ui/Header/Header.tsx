import React from 'react'
import { LinkItem, Container, Button } from '@components/ui'
import { useRouter } from 'next/router'
import { PRODUCTS } from '@constants/common'
import { useUI } from '@state'

const Header = () => {
  const { asPath } = useRouter()
  const { openDrawer } = useUI()

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
            <Button
              shape="block"
              variant="secondary"
              size="small"
              onClick={openDrawer}
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={0.2}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
