import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavbarItemProps } from './types';

function NavbarItem(props: NavbarItemProps) {
  const {
    item: { label, href, subItems },
    active,
    onActive,
  } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <li
      key={label}
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        className={`hover:text-black transition px-1 pb-1 border-b-2 ${
          active === label ? 'border-black' : 'border-transparent'
        } flex items-center`}
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
            className={`inline-block align-middle ml-2 transition-transform duration-200 ${
              hovered ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>
      {/* Popup for subItems */}
      {subItems && hovered && (
        <ul className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full flex flex-col min-w-[180px] bg-white shadow-lg rounded-xl py-2 z-50 border border-gray-100 animate__animated animate__fadeInUp animate__faster'>
          {subItems.map((sub) => (
            <li key={sub.label}>
              <a
                href={sub.href || '#'}
                className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition rounded-md text-sm whitespace-nowrap'
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavbarItem;
