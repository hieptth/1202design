import { NavItem } from '../types/common';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: 'services',
    subItems: [
      { label: 'Website Design', href: 'services#design' },
      { label: 'Website Development', href: 'services#deployment' },
      { label: 'Website Copy Writing', href: 'services#copy-writing' },
    ],
  },
  { label: 'Work', href: 'work' },
  { label: 'Blogs', href: 'blogs' },
];
