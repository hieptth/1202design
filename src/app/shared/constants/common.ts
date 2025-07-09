import { NavItem } from '../types/common';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  {
    label: 'Services',
    href: '#services',
    subItems: [
      { label: 'Website Design' },
      { label: 'Website Development' },
      { label: 'Website Copy Writing' },
    ],
  },
  { label: 'Work', href: '#work' },
  { label: 'Blogs', href: '#blogs' },
];
