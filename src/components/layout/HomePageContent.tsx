import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import appScreen from './../../assets/images/appScreen.png';
import NextJsImg from './../../assets/images/nextjs.png';

const HomePageContent = () => {
  return (
    <div>
      <main>
        <div className='overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
              <div className='relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'>
                <h1 className='text-4xl font-medium tracking-tight text-gray-900'>
                  Next.js Tailwindcss Social App
                </h1>
                <p className='mt-6 text-lg text-gray-600'>
                  Web version of social app starter. You can also find mobile
                  version build in React Native and API build in Laravel on my
                  github -{' '}
                  <Link href='https://github.com/s-radosz'>Visit profile</Link>
                </p>
              </div>
              <div className='relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6'>
                <div className='absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0'>
                  <div className='align-items-center flex justify-center '>
                    <Image
                      src={appScreen}
                      alt='Social App'
                      width={250}
                      height={500}
                    />
                  </div>

                  <svg
                    viewBox='0 0 1026 1026'
                    fill='none'
                    aria-hidden='true'
                    className='animate-spin-slow absolute inset-0 h-full w-full'
                  >
                    <path
                      d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
                      stroke='#D4D4D4'
                      strokeOpacity='0.7'
                    ></path>
                    <path
                      d='M513 1025C230.23 1025 1 795.77 1 513'
                      stroke='url(#:R65m:-gradient-1)'
                      strokeLinecap='round'
                    ></path>
                    <defs>
                      <linearGradient
                        id=':R65m:-gradient-1'
                        x1='1'
                        y1='513'
                        x2='1'
                        y2='1025'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#06b6d4'></stop>
                        <stop
                          offset='1'
                          stopColor='#06b6d4'
                          stopOpacity='0'
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    viewBox='0 0 1026 1026'
                    fill='none'
                    aria-hidden='true'
                    className='animate-spin-reverse-slower absolute inset-0 h-full w-full'
                  >
                    <path
                      d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
                      stroke='#D4D4D4'
                      strokeOpacity='0.7'
                    ></path>
                    <path
                      d='M913 513c0 220.914-179.086 400-400 400'
                      stroke='url(#:R65m:-gradient-2)'
                      strokeLinecap='round'
                    ></path>
                    <defs>
                      <linearGradient
                        id=':R65m:-gradient-2'
                        x1='913'
                        y1='513'
                        x2='913'
                        y2='913'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#06b6d4'></stop>
                        <stop
                          offset='1'
                          stopColor='#06b6d4'
                          stopOpacity='0'
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6'>
                <p className='text-center text-sm font-semibold text-gray-900 lg:text-left'>
                  Technologies mostly used
                </p>
                <ul
                  role='list'
                  className='mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start'
                >
                  <li className='flex'>
                    <Image
                      src={NextJsImg}
                      alt='NEXT.js'
                      width={70}
                      height={50}
                    />
                  </li>
                  <li className='flex'>
                    <Image
                      src={NextJsImg}
                      alt='NEXT.js'
                      width={70}
                      height={50}
                    />
                  </li>
                  <li className='flex'>
                    <Image
                      src={NextJsImg}
                      alt='NEXT.js'
                      width={70}
                      height={50}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section
          id='secondary-features'
          aria-label='Features for building a portfolio'
          className='bg-orange-100 py-20 sm:py-32'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
                Now is the time to build your portfolio.
              </h2>
              <p className='mt-2 text-lg text-gray-600'>
                With typical market returns, you have to start young to secure
                your future. With Pocket, it’s never too late to build your nest
                egg.
              </p>
            </div>
            <ul
              role='list'
              className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
            >
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#737373'
                  ></path>
                  <path
                    d='M12 25l8-8m0 0h-6m6 0v6'
                    stroke='#171717'
                    strokeWidth='2'
                    strokeLinecap='round'
                  ></path>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Invest any amount
                </h3>
                <p className='mt-2 text-gray-700'>
                  Whether it’s $1 or $1,000,000, we can put your money to work
                  for you.
                </p>
              </li>
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#737373'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z'
                    fill='url(#:R1adm:-gradient)'
                  ></path>
                  <rect
                    x='9'
                    y='6'
                    width='14'
                    height='4'
                    rx='1'
                    fill='#171717'
                  ></rect>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                  <defs>
                    <linearGradient
                      id=':R1adm:-gradient'
                      x1='16'
                      y1='12'
                      x2='16'
                      y2='28'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#737373'></stop>
                      <stop
                        offset='1'
                        stopColor='#737373'
                        stopOpacity='0'
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Build a balanced portfolio
                </h3>
                <p className='mt-2 text-gray-700'>
                  Invest in different industries to find the most opportunities
                  to win huge.
                </p>
              </li>
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
                    fill='#737373'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z'
                    fill='#171717'
                  ></path>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Trade in real-time
                </h3>
                <p className='mt-2 text-gray-700'>
                  Get insider tips on big stock moves and act on them within
                  seconds.
                </p>
              </li>
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg
                  viewBox='0 0 32 32'
                  fill='none'
                  aria-hidden='true'
                  className='h-8 w-8'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#737373'
                  ></path>
                  <circle cx='11' cy='14' r='2' fill='#171717'></circle>
                  <circle cx='11' cy='20' r='2' fill='#171717'></circle>
                  <circle cx='11' cy='26' r='2' fill='#171717'></circle>
                  <path
                    d='M16 14h6M16 20h6M16 26h6'
                    stroke='#737373'
                    strokeWidth='2'
                    strokeLinecap='square'
                  ></path>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Profit from your network
                </h3>
                <p className='mt-2 text-gray-700'>
                  Invite new insiders to get tips faster and beat even other
                  Pocket users.
                </p>
              </li>
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg viewBox='0 0 32 32' aria-hidden='true' className='h-8 w-8'>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
                    fill='#737373'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z'
                    fill='#171717'
                  ></path>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Encrypted and anonymized
                </h3>
                <p className='mt-2 text-gray-700'>
                  Cutting-edge security technology that even the NSA doesn’t
                  know about keeps you hidden.
                </p>
              </li>
              <li className='rounded-2xl border border-gray-200 p-8'>
                <svg
                  viewBox='0 0 32 32'
                  fill='none'
                  aria-hidden='true'
                  className='h-8 w-8'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
                    fill='#737373'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z'
                    fill='#171717'
                  ></path>
                  <path
                    d='M10 12h12'
                    stroke='#737373'
                    strokeWidth='2'
                    strokeLinecap='square'
                  ></path>
                  <circle
                    cx='16'
                    cy='16'
                    r='16'
                    fill='#A3A3A3'
                    fillOpacity='0.2'
                  ></circle>
                </svg>
                <h3 className='mt-6 font-semibold text-gray-900'>
                  Portfolio tracking
                </h3>
                <p className='mt-2 text-gray-700'>
                  Watch your investments grow exponentially, leaving other
                  investors in the dust.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section
          id='faqs'
          aria-labelledby='faqs-title'
          className='border-t border-gray-200 py-20 sm:py-32'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2
                id='faqs-title'
                className='text-3xl font-medium tracking-tight text-gray-900'
              >
                Frequently asked questions
              </h2>
              <p className='mt-2 text-lg text-gray-600'>
                If you have anything else you want to ask,
                <a
                  className='text-gray-900 underline'
                  href='mailto:info@example.com'
                >
                  reach out to us
                </a>
                .
              </p>
            </div>
            <ul
              role='list'
              className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3'
            >
              <li>
                <ul role='list' className='space-y-10'>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      How do I know the tips are good?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Our whole business depends on our tips being good, so it’s
                      in our best interest that they are. The results of our
                      customers speak for themselves, just trust us.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      Isn’t this insider trading?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Yes exactly. But at scale! Historically you could only
                      make insider trades with knowledge from your direct
                      network. Pocket brings you insider trading tips from
                      people you don’t even know.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      But isn’t insider trading illegal?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Here’s the thing: you’re the one doing the insider
                      trading, not us. We’re just giving you the tips and some
                      tools to make trades. We’re not doing anything wrong here.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role='list' className='space-y-10'>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      Do the people giving you tips realize what they are doing?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Again I would argue this isn’t really our responsibility.
                      People make their own choices. If they don’t research the
                      consequences that’s on them, not on us.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      Where is Pocket based?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Let’s just say it’s not somewhere where the SEC is going
                      to find us.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      Is there any age limit to trading on Pocket?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      For our free plan, the age limit is based on the minimum
                      age to trade in your country of residence. Our VIP plan
                      uses advanced transaction anonymization though, so you can
                      use that plan even if you’re 9 years old. Or a dog.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role='list' className='space-y-10'>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      How did you get this on the App Store?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Honestly we were surprised too, but eventually we found
                      out that the app reviewer found the app so compelling they
                      approved it just so they could use it themselves.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      How do I explain the money I withdraw from Pocket to the
                      IRS?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      This feels like one-hundred percent a you problem. Pocket
                      is not responsible in any way for your tax returns.
                    </p>
                  </li>
                  <li>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      How do I become an insider?
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>
                      Contact us with some details about your industry and the
                      type of access you have to apply for an insider account.
                      Once approved, we’ll send you a guide on collecting
                      insider information without being detected at work.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePageContent;
