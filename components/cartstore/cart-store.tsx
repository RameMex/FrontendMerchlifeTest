'use client';
import { Link } from '@nextui-org/react';
import Image from 'next/image';

export const CartStore = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'grid',
        gridTemplateRows: 'auto',
        gap: '16px',
        borderRadius: '16px',
        border: '1px solid hsla(0,0%,100%,.07)',
        background: 'hsla(0,0%,100%,.1)',
        width: '500px',
        height: '300px'
      }}
    >
      <Link
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          height: '100px'
        }}
      >
        <figure
          style={{
            position: 'absolute',
            width: '100%'
          }}
        >
          <Image
            style={{
              borderRadius: '16px'
            }}
            width="1000"
            height="170"
            src="https://www.merchlife.co/6PMers.jpg"
            alt="nose"
          />
        </figure>
      </Link>
      <div
        style={{
          gridTemplateColumns: 'repeat(3,1fr)',
          display: 'grid',
          gap: '16px',
          justifyItems: 'center'
        }}
      >
        <Link>
          <Image
            style={{
              borderRadius: '16px'
            }}
            width="100"
            height="170"
            src="https://www.merchlife.co/product_two.jpg"
            alt="nose"
          />
        </Link>
        <Link>
          <Image
            style={{
              borderRadius: '16px'
            }}
            width="100"
            height="170"
            src="https://www.merchlife.co/product_three.jpg"
            alt="nose"
          />
        </Link>
        <Link>
          <Image
            style={{
              borderRadius: '16px'
            }}
            width="100"
            height="170"
            src="https://www.merchlife.co/product_one.jpg"
            alt="nose"
          />
        </Link>
      </div>
    </div>
  );
};
