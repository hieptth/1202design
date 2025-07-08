import Image from 'next/image';

function Navbar() {
  return (
    <nav className='flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200 bg-white'>
      <Image
        src='/assets/logo.png'
        alt='1202 Design Studio Logo'
        width={140}
        height={32}
        className='h-8 w-auto sm:h-10 sm:w-[200px]'
      />
      {/* Desktop Nav */}
      <ul className='hidden md:flex items-center gap-8 text-gray-700 font-medium'>
        <li>
          <a
            className='hover:text-black transition px-1 pb-1 border-b-2 border-black'
            href='#'
          >
            Home
          </a>
        </li>
        <li>
          <a
            className='hover:text-black transition'
            href='#services'
          >
            Services <span className='inline-block align-middle'>▼</span>
          </a>
        </li>
        <li>
          <a
            className='hover:text-black transition'
            href='#work'
          >
            Work
          </a>
        </li>
        <li>
          <a
            className='hover:text-black transition'
            href='#blogs'
          >
            Blogs
          </a>
        </li>
      </ul>
      <a
        href='#contact'
        className='hidden md:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900 transition'
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
      {/* Mobile Hamburger */}
      <button
        className='md:hidden flex items-center justify-center p-2 ml-2 rounded hover:bg-gray-100'
        aria-label='Open menu'
      >
        <svg
          width='32'
          height='32'
          fill='none'
          stroke='black'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
