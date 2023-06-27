export interface UiButtonProps {
  transparent?: boolean;
  icon?: IconTypes | null;
}

export type IconTypes = 'delete' | 'edit' | 'comments' | 'favourites' | 'close' | 'plus'


export interface NavItemProps {
  route: Route;
}

export interface Route {
  id: number,
  name: string,
  routeName: string,
} 