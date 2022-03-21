import { Stack } from '@components/ui'
import React from 'react'
import s from './Drawer.module.css'

const Drawer = () => {
  return (
    <aside>
      <div className={s.root}>
        <Stack>Hello Drawer</Stack>
      </div>
    </aside>
  )
}
export default Drawer
