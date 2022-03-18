import React from 'react'
import { Medium, Linkedin, Github, Email } from '@components/icons'
import type { ISocialIcons } from '@components/icons'

interface IProps extends ISocialIcons {
  name: string
}

const IconsQuery = ({ name, variant, hasBg, size }: IProps) =>
  ({
    medium: <Medium size={size} variant={variant} hasBg={hasBg} />,
    linkedin: <Linkedin size={size} variant={variant} hasBg={hasBg} />,
    github: <Github size={size} variant={variant} hasBg={hasBg} />,
    email: <Email size={size} variant={variant} hasBg={hasBg} />,
  }[name])

export default IconsQuery
