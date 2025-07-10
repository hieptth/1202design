'use client';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_ITEMS } from '@/app/shared/constants';

const TEXT = {
  copyright: 'Copyright © 2025 - 1202 Design Studio. All rights reserved.',
};

function Footer() {
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <footer className='w-full border-t border-gray-200 bg-white px-4 sm:px-8 py-8'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4'>
        {/* Left: Logo and description */}
        <div className='flex flex-col gap-4 md:w-1/3'>
          <div className='flex items-center justify-between md:justify-start gap-4'>
            <Image
              src='/assets/logo.png'
              alt='1202 Design Studio Logo'
              width={140}
              height={32}
              className='h-8 w-auto sm:h-10 sm:w-[200px]'
            />
            {/* Contact button (mobile) */}
            <a
              href='#contact'
              className='md:hidden flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900 transition'
            >
              <Image
                src='/assets/envelope.svg'
                alt='envelope icon'
                width={24}
                height={24}
                className='invert'
              />
              Contact us
            </a>
          </div>
          <p className='text-[#767676] text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur. Faucibus convallis nibh nibh
            nec velit egestas. Posuere amet egestas in vel vitae ornare ultrices
            morbi purus.
          </p>
          <div className='hidden lg:block mt-8 text-xs text-black font-medium text-left md:text-left'>
            {TEXT.copyright}
          </div>
        </div>
        {/* Center: Navigation */}
        <div className='flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto'>
          <ul className='flex flex-col md:flex-row gap-2 md:gap-8 text-black font-medium text-base mt-4 md:mt-0'>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className='relative'
              >
                <a
                  type='button'
                  className='hover:text-black hover:underline transition flex items-center gap-1'
                  onClick={() =>
                    setOpenSub(openSub === item.label ? null : item.label)
                  }
                  href={item.href}
                  aria-expanded={openSub === item.label}
                >
                  {item.label}
                  {item.subItems && (
                    <>
                      <Image
                        src='/assets/caret-down.svg'
                        alt='caret down icon'
                        width={20}
                        height={20}
                        className={`inline-block md:hidden align-middle ml-2 transition-transform duration-200 ${
                          openSub === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </>
                  )}
                </a>
                {/* Sub Items: show on mobile if open, always on desktop */}
                {item.subItems && (
                  <ul
                    className={`flex flex-col gap-2 text-gray-500 text-sm mt-2 ml-3 md:ml-0 animate__animated animate__fadeIn ${
                      openSub === item.label ? 'block' : 'hidden'
                    } md:block`}
                  >
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.label}
                        className='mb-2'
                      >
                        {subItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Contact button (desktop) */}
        <div className='hidden md:flex flex-col items-end md:w-1/5'>
          <a
            href='#contact'
            className='flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900 transition'
          >
            <Image
              src='/assets/envelope.svg'
              alt='envelope icon'
              width={24}
              height={24}
              className='invert'
            />
            Contact us
          </a>
        </div>
      </div>
      <div className='block lg:hidden mt-8 text-xs text-black font-medium text-left md:text-left'>
        {TEXT.copyright}
      </div>
    </footer>
  );
}

export default Footer;
