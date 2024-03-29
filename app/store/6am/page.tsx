'use client';
import { Avatar, Card, CardHeader, Image } from '@nextui-org/react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });
const interProducts = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Store() {
  return (
    <main
      style={{
        backgroundColor: '#171717',
        fontFamily: "'Inter',sans-serif"
      }}
    >
      <div
        style={{
          padding: '42px 72px 58px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '16px',
          position: 'relative'
        }}
      >
        <img
          src="/6PMers.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            background: 'linear-gradient(180deg,hsla(0,0%,9%,.4),#171717 100%,#171717 0)',
            backdropFilter: 'blur(5px)',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div
          style={{
            zIndex: '2',
            display: 'flex',
            width: '100%'
          }}
        >
          <button
            className={inter.className}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              alignItems: 'center'
            }}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path
                fill="#FAFAFA"
                fill-rule="evenodd"
                d="M13.333 8a.667.667 0 0 1-.666.666H3.333a.667.667 0 1 1 0-1.333h9.334c.368 0 .666.299.666.667Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#FAFAFA"
                fill-rule="evenodd"
                d="M8.471 13.138a.667.667 0 0 1-.942 0L2.862 8.472a.667.667 0 0 1 0-.943l4.667-4.667a.667.667 0 1 1 .942.943L4.276 8l4.195 4.195c.26.26.26.683 0 .943Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Back
          </button>
        </div>
        <div
          style={{
            width: '180px',
            height: '180px',
            zIndex: '2'
          }}
        >
          <Avatar src="/6PMers.jpg" className="h-48 w-48 text-large" />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '4px',
            color: '#fff',
            zIndex: '2'
          }}
        >
          <h1
            className={inter.className}
            style={{
              fontWeight: '700',
              fontSize: '1.6rem',
              lineHeight: '2rem'
            }}
          >
            The6PMersSwagShop
          </h1>
          <p
            className={inter.className}
            style={{
              fontWeight: '400',
              fontStyle: 'italic',
              fontSize: '1rem',
              lineHeight: '1.8rem'
            }}
          >
            Welcome to our Merch shop, where every 6PM enthusiast will find their perfect match in
            our club collection tees!{' '}
          </p>

          <div
            style={{
              // fontWeight: "400",
              fontSize: '1.5rem',
              // lineHeight: "1.8rem",
              color: 'white',
              height: '100px',
              width: '24px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '8px'
            }}
          >
            <Link
              href="https://www.instagram.com/6pmers/"
              style={{
                height: '100px',
                width: '24px',
                cursor: 'pointer'
              }}
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <section
        style={{
          display: 'grid',
          justifyContent: 'center'
        }}
      >
        <div className="grid max-w-[900px] grid-cols-12 gap-2 px-8 pb-8">
          <Card className="col-span-12 h-[300px] sm:col-span-4">
            <Link href={'/product/6-PMers-Black-T-shirt'}>
              <CardHeader className="absolute top-0 z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-xs font-bold uppercase text-slate-900/70`}
                >
                  Go to buy
                </p>
                <h4
                  className={`${interProducts.variable} font-sans text-base font-medium text-slate-900`}
                >
                  6 PMers Black T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover"
                src="/product_two.jpg"
              />
            </Link>
          </Card>
          <Card className="col-span-12 h-[300px] sm:col-span-4">
            <Link href={'/product/6PM-Somewhere-Black-T-shirt'}>
              <CardHeader className="absolute top-1 z-10 flex-col !items-start bg-white/30">
                <p className="text-tiny font-bold uppercase text-black/60">Go to buy</p>
                <h4
                  className={`${interProducts.variable} font-sans text-base font-medium text-slate-900`}
                >
                  It&apos;s 6PM Somewhere Black T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover"
                src="https://politicozen-prod.s3.us-east-2.amazonaws.com/1701919734011-Thief%20Love%20T-shirt%20By%20Engin%20Selcuk-product-white"
              />
            </Link>
          </Card>
          <Card className="col-span-12 h-[300px] sm:col-span-4">
            <Link href={'/product/Re-Social-White-T-shirt'}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-xs font-bold uppercase text-slate-900/60`}
                >
                  Go to buy
                </p>
                <h4
                  className={`${interProducts.variable} font-sans text-base font-medium text-slate-900`}
                >
                  Re-Social White T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 h-full w-full object-cover"
                src="/product_one.jpg"
              />
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
