import Image from 'next/image';

function HeroBanner() {
  return (
    <section className='relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 py-12 sm:py-24 min-h-[800px] bg-black overflow-hidden'>
      {/* Background Particles Image */}
      <div className='absolute inset-0 z-0 w-full h-full pointer-events-none'>
        <Image
          src='/assets/particles.png'
          alt='particles background'
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className='opacity-80'
        />
      </div>
      {/* Left: Hero Text */}
      <div className='z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center mt-8 lg:mt-0'>
        <h1 className='text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center lg:text-left leading-tight'>
          Let&apos;s build
          <br />
          your website.
        </h1>
        <button className='mt-2 bg-white text-black px-6 py-3 rounded-md font-semibold text-base sm:text-lg flex items-center gap-2 hover:bg-gray-100 transition cursor-pointer mx-auto lg:mx-0'>
          Get your website
          <Image
            src='/assets/arrow-right.svg'
            alt='arrow right icon'
            width={24}
            height={24}
            className='w-5 h-5 sm:w-8 sm:h-8'
          />
        </button>
      </div>
      {/* Right: Info Card with 3 rectangles */}
      <div className='z-10 w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative'>
        {/* Rectangle 1 */}
        <div
          className='lg:block absolute bg-white rounded-[24px] shadow-lg'
          style={{
            width: 140,
            height: 180,
            bottom: 80,
            right: 240,
            opacity: 1,
          }}
        ></div>
        {/* Rectangle 2 */}
        <div
          className='lg:block absolute bg-white rounded-[24px] shadow-lg'
          style={{
            width: 160,
            height: 295,
            top: 20,
            right: 100,
            opacity: 1,
          }}
        ></div>
        {/* Rectangle 3 (main card) */}
        <div
          className='bg-white rounded-[24px] p-6 sm:p-8 shadow-lg relative'
          style={{
            width: 426.73,
            height: 140,
            top: 270,
            right: 239,
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className='mt-4 text-center lg:text-left'>
            <div className='font-bold text-black mb-1 text-2xl'>Contact us</div>
            <a
              href='mailto:hello@1202design.com'
              className='text-black break-all'
            >
              hello@1202design.com
            </a>
          </div>
        </div>
        <div
          className='lg:block absolute bg-white'
          style={{
            width: 50,
            height: 50,
            top: 55,
            right: 260,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-black rounded-tr-2xl'
          style={{
            width: 50,
            height: 50,
            top: 60,
            right: 260,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-white'
          style={{
            width: 50,
            height: 50,
            top: -30,
            right: 190,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-black rounded-bl-2xl'
          style={{
            width: 50,
            height: 50,
            top: -30,
            right: 190,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-white'
          style={{
            width: 50,
            height: 50,
            bottom: -225,
            right: 189,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-black rounded-tl-2xl'
          style={{
            width: 50,
            height: 50,
            bottom: -225,
            right: 189,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-white'
          style={{
            width: 50,
            height: 50,
            bottom: -130,
            right: 260,
            opacity: 1,
          }}
        ></div>
        <div
          className='lg:block absolute bg-black rounded-br-2xl'
          style={{
            width: 50,
            height: 50,
            bottom: -130,
            right: 260,
            opacity: 1,
          }}
        ></div>
        <div className='absolute top-40 right-75 px-4 sm:px-8'>
          <p className='text-lg mb-4 text-center lg:text-right'>
            We are 1202 (twelve-oh-two)
            <br />
            and we make professional websites
            <br />
            for your business quickly and affordably.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
