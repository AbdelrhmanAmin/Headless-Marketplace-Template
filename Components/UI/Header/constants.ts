import ROUTES from '@constants/routes.json'

export interface NavigationInterface {
  slug: string
  title: string
}

export const navigation: NavigationInterface[] = [
  {
    slug: '/',
    title: 'Logo',
  },
  ROUTES.MARKETPLACE,
]
