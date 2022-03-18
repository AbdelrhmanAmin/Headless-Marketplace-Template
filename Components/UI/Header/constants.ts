import ROUTES from '@constants/routes.json'

export interface NavigationInterface {
  slug: string
  title: string
}

export const navigation: NavigationInterface[] = [ROUTES.MARKETPLACE]
