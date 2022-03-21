import { IconsQuery } from '@components/icons'
import { LinkItem, Stack, Button } from '@components/ui'
import React from 'react'
import { SOCIAL_MEDIA_LINKS, PRODUCTS } from '@constants/common'
import s from './Drawer.module.css'
import cn from 'classnames'

interface IDrawer {
  isOpen: boolean
  onClose: () => void
}

const Drawer = ({ isOpen, onClose }: IDrawer) => {
  return (
    <aside className={cn(s.root, isOpen ? s.show : s.hide)}>
      <Stack className="pt-3 space-y-8 divide-y-2 divide-gray-500 capitalize text-gray-100 ">
        <div className="px-4 flex justify-between items-center">
          <h3 className="text-3xl">[Logo]</h3>
          <div>
            <Button
              shape="circle"
              variant="secondary"
              size="small"
              onClick={onClose}
            >
              <svg
                width="22"
                height="22"
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button>
          </div>
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
