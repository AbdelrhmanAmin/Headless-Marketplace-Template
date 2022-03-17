import React from 'react'
import { Medium, Linkedin, Github } from '@Components/icons'
import type { ISocialIcons } from '@Components/icons'

interface IProps extends ISocialIcons {
  name: string
}

const IconsQuery = ({ name, variant, hasBg, size = 'small' }: IProps) =>
  ({
    medium: <Medium size={size} variant={variant} hasBg={hasBg} />,
    linkedin: <Linkedin size={size} variant={variant} hasBg={hasBg} />,
    github: <Github size={size} variant={variant} hasBg={hasBg} />,
  }[name])

export default IconsQuery
