import React from 'react'
import LinkItem from '../LinkItem'

const icons = [
  {
    slug: 'https://www.linkedin.com/in/abdoamin/',
    icon: 'linkedin',
  },
  {
    slug: 'https://github.com/AbdelrhmanAmin',
    icon: 'github',
  },
  {
    slug: 'https://medium.com/@abdoamin',
    icon: 'medium',
  },
  {
    slug: 'mailto:abdo.amin9991@gmail.com',
    icon: 'email',
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="min-h-[160px] flex items-center justify-center">
        {icons.map(({ icon, slug }) => (
          <LinkItem slug={slug} isExternal>
            {icon}
          </LinkItem>
        ))}
      </div>
    </footer>
  )
}

export default Footer
