export { default as Coin } from './Coin'
export { default as Email } from './Email'
export { default as Github } from './Github'
export { default as Linkedin } from './Linkedin'
export { default as Medium } from './Medium'
export { default as IconsQuery } from './IconsQuery'

export interface IconProps {
  variant?: 'dark' | 'light'
  size: 'xxxl' | 'xxl' | 'xl' | 'large' | 'medium' | 'small'
}
export interface ISocialIcons {
  variant?: 'default' | 'white'
  hasBg?: boolean
  size: IconProps['size']
}
