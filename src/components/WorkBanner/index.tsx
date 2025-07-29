import Image from 'next/image';
import clsx from 'clsx';

function WorkBanner() {
  return (
    <section className='w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 mt-[81px] sm:mt-[77px] bg-white'>
      <h2 className='text-display-lg md:text-display-2xl font-semibold text-center mb-4 text-gray-950'>
        Websites that convert.
        <br className='hidden sm:block' />
        <span className='block'>Scale your business 2X faster.</span>
      </h2>
      <p className='text-center text-gray-600 max-w-xl mx-auto mb-6 text-lg md:text-display-xs font-normal'>
        Lorem ipsum dolor sit amet consectetur. Cras erat tortor neque mattis
        tortor neque eleifend amet. Blandit enim morbi adipiscing potenti in
        erat aenean senectus molestie.
      </p>
      <button
        className={clsx(
          'bg-gray-950 text-white px-6 py-3 rounded-xl text-md font-medium',
          'flex items-center gap-2 hover:bg-gray-900 group cursor-pointer transition mb-10'
        )}
      >
        Get your website
        <Image
          src='/assets/arrow-right-white.svg'
          alt='Arrow Right Icon'
          width={24}
          height={24}
          className='transition-transform duration-300 group-hover:translate-x-1'
        />
      </button>
      <div className='w-full flex justify-center overflow-hidden'>
        <Image
          src='/assets/work-banner.svg'
          alt='Work Banner'
          width={1000}
          height={500}
          priority
          className='
              w-[500px] scale-100
              sm:w-[600px] sm:scale-110
              md:w-[900px] md:scale-100
              lg:w-[1000px] lg:scale-100
              transition-transform duration-500 max-w-none
            '
        />
      </div>
    </section>
  );
}

export default WorkBanner;
