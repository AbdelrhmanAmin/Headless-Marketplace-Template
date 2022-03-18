import { IconsQuery } from '@components/icons'
import React from 'react'
import { Stack, LinkItem } from '@components/UI'

const icons = [
  {
    slug: 'https://www.linkedin.com/in/abdoamin/',
    name: 'linkedin',
  },
  {
    slug: 'https://github.com/AbdelrhmanAmin',
    name: 'github',
  },
  {
    slug: 'https://medium.com/@abdoamin',
    name: 'medium',
  },
  {
    slug: 'mailto:abdo.amin9991@gmail.com',
    name: 'email',
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Stack className="min-h-[160px] items-center justify-center space-y-2">
        <div>
          <strong>Abdo Amin</strong>
        </div>
        <div>
          <strong>Front End Developer</strong>
        </div>
        <div className="flex">
          {icons.map(({ name, slug }) => (
            <LinkItem key={slug} slug={slug} isExternal>
              {IconsQuery({
                name,
                variant: 'white',
                hasBg: true,
                size: 'small',
              })}
            </LinkItem>
          ))}
        </div>
      </Stack>
    </footer>
  )
}

export default Footer
