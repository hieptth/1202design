import Image from 'next/image';
import { NavbarItemProps } from './types';

function NavbarItem(props: NavbarItemProps) {
  const {
    item: { label, href, subItems },
    active,
    onActive,
  } = props;
  return (
    <li key={label}>
      <a
        className={`hover:text-black transition px-1 pb-1 border-b-2 ${
          active === label ? 'border-black' : 'border-transparent'
        }`}
        href={href}
        onClick={() => onActive(label)}
      >
        {label}
        {subItems && (
          <Image
            src='/assets/caret-down.svg'
            alt='caret down icon'
            width={12}
            height={12}
            className='inline-block align-middle ml-2'
          />
        )}
      </a>
    </li>
  );
}

export default NavbarItem;
