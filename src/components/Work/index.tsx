const STEPS = [
  {
    number: '01',
    title: 'We get your requirement',
    desc: 'We just need a few simple details about you and your ideas. This should only take about 10 to 15 minutes.',
  },
  {
    number: '02',
    title: 'We plan on it',
    desc: `You will receive a design sneak peak within 7 days. If approved, we'll complete your design system within 14 days.`,
  },
  {
    number: '03',
    title: 'We make it happens',
    desc: `Activate and make your website live for all to see. It's that simple.`,
  },
];

function Work() {
  return (
    <section className='w-full flex flex-col items-center px-4'>
      <h2 className='text-display-sm sm:text-display-lg font-normal text-center mb-8 sm:mb-12'>
        HOW WE WORK?
      </h2>
      <div className='w-full max-w-4xl flex flex-col gap-6'>
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            className={`rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center gap-6 px-6 sm:px-12 py-8 sm:py-10 transition-colors duration-300
              ${idx === 1 ? 'bg-black text-white' : 'bg-[#fafafa] text-black'}
            `}
          >
            <div
              className='flex-shrink-0 text-[150px] sm:text-[250px] leading-none font-light select-none mr-6 sm:mr-12 font-sans relative overflow-hidden max-h-[80px] lg:max-h-[120px]'
              style={{
                fontFamily: 'inherit',
                height: '1em',
                marginBottom: '-0.18em',
              }}
            >
              <span
                className='block'
                style={{ transform: 'translateY(-12%)' }}
              >
                {step.number}
              </span>
            </div>
            <div className='mt-5 lg:mt-0'>
              <div className='font-semibold text-lg sm:text-xl mb-2'>
                {step.title}
              </div>
              <div className='text-sm sm:text-base font-normal opacity-80 max-w-xs sm:max-w-md'>
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
