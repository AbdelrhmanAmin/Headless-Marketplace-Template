import React from 'react'
import type { ISocialIcons } from 'sdf/icons'
import s from './icon.module.css'
import cn from 'classnames'

const Email = ({ size, variant, hasBg }: ISocialIcons) => {
  let fill
  if (variant === 'white') {
    fill = '#fff'
  } else {
    fill = '#000'
  }
  return (
    <div className={cn(hasBg && s.iconBg)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill={fill}
        className={size && s[size]}
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
      </svg>
    </div>
  )
}
export default Email
