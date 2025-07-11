'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';

const FORM_API_URL = 'https://formspree.io/f/xovwgedk';

function Contact() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    // Submit to API
    try {
      await fetch(FORM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      toast.success('Form submitted successfully!');
    } catch {
      toast.error('Error submitting form. Please try again later.');
      return;
    }
  };

  return (
    <section className='w-full max-w-5xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8'>
      {/* Left: Info and Illustration */}
      <div className='flex-1 bg-[var(--color-neutral-50)] rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[470px] lg:min-h-[600px] shadow-md relative overflow-hidden'>
        {/* Gradient background bottom right */}
        <div
          className='pointer-events-none absolute right-0 bottom-0 w-2/3 h-2/3'
          style={{
            background:
              'linear-gradient(120deg,rgba(0,0,0,0.00) 60%,rgba(0,0,0,0.08) 100%)',
          }}
        />
        <div className='relative z-10'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>CONTACT US</h2>
          <p className='text-gray-700 mb-8 text-base sm:text-lg'>
            Have a particular project in mind?{' '}
            <br className='hidden sm:block' />
            Contact us to help you transform your ideas into a unique end-to-end
            website.
          </p>
        </div>
        <div className='flex justify-center items-end mt-4 relative z-10'>
          <Image
            src='/assets/contact-envelope.png'
            alt='Envelope illustration'
            width={260}
            height={180}
            className='w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[400px] object-contain absolute bottom-[-110px] right-[-30px] md:bottom-[-130px] md:right-[-60px] lg:bottom-[-110px] lg:right-[-40px]'
          />
        </div>
      </div>
      {/* Right: Form */}
      <form
        onSubmit={handleSubmit}
        className='flex-1 bg-[#f7f7f7] rounded-2xl p-6 sm:p-10 flex flex-col gap-4 shadow-md'
      >
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='firstName'
            className='font-medium text-sm mb-1'
          >
            First name
          </label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
              <Image
                src='/assets/user-circle.svg'
                alt='User Circle'
                width={18}
                height={18}
              />
            </span>
            <input
              id='firstName'
              ref={firstNameRef}
              type='text'
              placeholder='Enter your first name'
              required
              className='w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='lastName'
            className='font-medium text-sm mb-1'
          >
            Last name
          </label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
              <Image
                src='/assets/user-circle.svg'
                alt='User Circle'
                width={18}
                height={18}
              />
            </span>
            <input
              id='lastName'
              ref={lastNameRef}
              type='text'
              placeholder='Enter your last name'
              required
              className='w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='email'
            className='font-medium text-sm mb-1'
          >
            Email address
          </label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
              <Image
                src='/assets/envelope-gray.svg'
                alt='User Circle'
                width={18}
                height={18}
              />
            </span>
            <input
              id='email'
              ref={emailRef}
              type='email'
              placeholder='Enter your email address'
              required
              className='w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='message'
            className='font-medium text-sm mb-1'
          >
            Message
          </label>
          <div className='relative'>
            <textarea
              id='message'
              ref={messageRef}
              placeholder='Type message...'
              required
              className='w-full pl-3 pr-10 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm min-h-[80px] resize-none'
            />
            <span className='absolute right-3 top-3 text-gray-400'>
              <Image
                src='/assets/pencil.svg'
                alt='User Circle'
                width={18}
                height={18}
              />
            </span>
          </div>
        </div>
        <button
          type='submit'
          className='w-full text-center mt-4 bg-black text-white px-8 py-2 rounded-md font-medium flex justify-center items-center gap-2 hover:bg-gray-900 transition cursor-pointer'
        >
          Our work
          <Image
            src='/assets/arrow-right-white.svg'
            alt='User Circle'
            width={18}
            height={18}
          />
        </button>
      </form>
    </section>
  );
}

export default Contact;
