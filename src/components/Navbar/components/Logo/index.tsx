import Image from 'next/image';

function Logo() {
  return (
    <Image
      src='/assets/logo.png'
      alt='1202 Design Studio Logo'
      width={140}
      height={32}
      className='h-8 w-auto sm:h-10 sm:w-[200px]'
    />
  );
}

export default Logo;
