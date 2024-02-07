import { GridTileImage } from 'components/grid/tile';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: any;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/6am`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: 'hidden-homepage-featured-items'
  // });

  const homepageItems = [
    {
      featuredImage: {
        url: 'https://www.merchlife.co/product_two.jpg'
      },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    },
    {
      featuredImage: {
        url: 'https://www.merchlife.co/product_three.jpg'
      },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    },
    {
      featuredImage: {
        url: 'https://www.merchlife.co/product_one.jpg'
      },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    },
    {
      featuredImage: {
        url: '/back_black.png'
      },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    },
    {
      featuredImage: {
        url: '/pocket_black.png'
      },
      title: 'Product 1',
      priceRange: {
        maxVariantPrice: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    }
  ];

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct] = homepageItems;

  return (
    <section>
      <div className="mt-8 p-4 text-4xl font-extrabold text-white"> Stores at Merchlife</div>
      <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 pt-4 md:grid-cols-8 md:grid-rows-2">
        <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={fourthProduct} />
        <ThreeItemGridItem size="half" item={fifthProduct} />
      </div>
    </section>
  );
}
