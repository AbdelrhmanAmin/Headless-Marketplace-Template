import { IconsQuery } from '@components/icons'
import { LinkItem, Stack } from '@components/ui'
import React from 'react'
import { SOCIAL_MEDIA_LINKS, PRODUCTS } from '@constants/common'
import s from './Drawer.module.css'

const Drawer = () => {
  return (
    <aside className={s.root}>
      <Stack className="pt-3 space-y-8 divide-y-2 divide-gray-500 capitalize text-gray-100 ">
        <div className="px-4 flex justify-between items-center">
          <h3 className="text-3xl">[Logo]</h3>
          <div>x</div>
        </div>
        <ul>
          <div className={s.menuTitle}>
            <h6>Products</h6>
          </div>
          <li>
            {PRODUCTS.map(({ name, slug }) => (
              <LinkItem
                key={slug}
                variant="ghost"
                slug={slug}
                className={s.menuItem}
                isRounded={false}
              >
                <span>⚖️ {name}</span>
              </LinkItem>
            ))}
          </li>
        </ul>
        <ul>
          <div className={s.menuTitle}>
            <h6>Contact Me</h6>
          </div>
          {SOCIAL_MEDIA_LINKS.map(({ name, slug }) => (
            <li key={slug}>
              <LinkItem
                variant="ghost"
                slug={slug}
                className={s.menuItem}
                isRounded={false}
                isExternal
              >
                {IconsQuery({
                  name,
                  variant: 'white',
                  size: 'small',
                })}
                <span>{name}</span>
              </LinkItem>
            </li>
          ))}
        </ul>
      </Stack>
    </aside>
  )
}
export default Drawer
