'use client';

import Link from 'next/link';
import { CartStoreHome } from './cart-store-home';

function ThreeItemGridItemStore({ size }: { size: 'full' | 'half' }) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/6am`}>
        <CartStoreHome size={size} />
      </Link>
    </div>
  );
}

export async function ThreeItemGridStores() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items'
  // });

  return (
    <section>
      <div className="mb-4 mt-8 p-4 text-4xl font-extrabold text-white"> Sellers at Merchlife</div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-8 md:grid-rows-2">
        <ThreeItemGridItemStore size="full" />
        <ThreeItemGridItemStore size="half" />
        <ThreeItemGridItemStore size="half" />
        <ThreeItemGridItemStore size="half" />
        <ThreeItemGridItemStore size="half" />
      </div>
    </section>
  );
}
