import { Email, Github, Linkedin } from '@components/icons'
import { LinkItem, Stack } from '@components/ui'
import React from 'react'
import s from './Drawer.module.css'

const Drawer = () => {
  return (
    <aside>
      <div className={s.root}>
        <Stack className="pt-8 space-y-8">
          <div className="px-4">
            <h3 className="text-3xl text-white">Hello There :)</h3>
          </div>
          <ul>
            <li>
              <LinkItem
                variant="ghost"
                slug="/"
                className="flex justify-start text-xl text-gray-100 space-x-2 w-full px-4"
                isRounded={false}
              >
                <Github variant="white" size="small" />
                <span>Github</span>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                variant="ghost"
                slug="/"
                className="flex justify-start text-xl text-gray-100 space-x-2 w-full px-4"
                isRounded={false}
              >
                <Linkedin variant="white" size="small" />
                <span>LinkedIn</span>
              </LinkItem>
            </li>
            <li>
              <LinkItem
                variant="ghost"
                slug="/"
                className="flex justify-start text-xl text-gray-100 space-x-2 w-full px-4"
                isRounded={false}
              >
                <Email variant="white" size="small" />
                <span>Email</span>
              </LinkItem>
            </li>
          </ul>
        </Stack>
      </div>
    </aside>
  )
}
export default Drawer
