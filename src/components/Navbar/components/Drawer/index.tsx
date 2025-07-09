import Image from 'next/image';
import { NAV_ITEMS } from '@/app/shared/constants';
import { NavbarDrawerProps } from './types';

function NavbarDrawer({ active, onActive, onDrawerOpen }: NavbarDrawerProps) {
  return (
    <div className='fixed inset-0 z-50 flex '>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/40'
        onClick={() => onDrawerOpen(false)}
      ></div>
      {/* Drawer */}
      <div className='ml-auto w-64 max-w-full h-full bg-white shadow-lg flex flex-col p-6 animate-slide-in z-10 animate__animated animate__fadeInRight animate__faster'>
        <button
          className='self-end mb-6 p-2 rounded hover:bg-gray-100'
          aria-label='Close menu'
          onClick={() => onDrawerOpen(false)}
        >
          <svg
            width='28'
            height='28'
            fill='none'
            stroke='black'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path d='M6 6l12 12M6 18L18 6' />
          </svg>
        </button>
        <ul className='flex flex-col gap-6 text-gray-700 font-medium'>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                className={`block px-1 pb-1 border-b-2 ${
                  active === item.label
                    ? 'border-black text-black'
                    : 'border-transparent'
                } transition`}
                href={item.href}
                onClick={() => {
                  onActive(item.label);
                  onDrawerOpen(false);
                }}
              >
                {item.label}
                {item.subItems && (
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
          ))}
        </ul>
        <a
          href='#contact'
          className='flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900 transition mt-8'
          onClick={() => onDrawerOpen(false)}
        >
          <Image
            src='/assets/envelope.svg'
            alt='envelope icon'
            width={28}
            height={28}
            className='invert'
          />
          Contact us
        </a>
      </div>
    </div>
  );
}

export default NavbarDrawer;
