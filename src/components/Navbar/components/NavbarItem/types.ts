import { NavItem } from '../../types';

export interface NavbarItemProps {
  item: NavItem;
  active: string;
  onActive: (label: string) => void;
}
