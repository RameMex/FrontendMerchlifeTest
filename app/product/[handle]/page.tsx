import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { GridTileImage } from 'components/grid/tile';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import Link from 'next/link';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  // const product = await getProduct(params.handle);
  const product = {
    featuredImage: {
      url: 'https://politicozen-prod.s3.us-east-2.amazonaws.com/1701919734011-Thief%20Love%20T-shirt%20By%20Engin%20Selcuk-product-white',
      height: '200',
      width: '100',
      altText: 'ook'
    }
  };
  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  // const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: '6am',
    description: 'Image',
    // robots: {
    //   index: indexable,
    //   follow: indexable,
    //   googleBot: {
    //     index: indexable,
    //     follow: indexable
    //   }
    // },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage() {
  // const product = await getProduct(params.handle);
  const product = {
    title: '6am',
    handle: '6am',
    id: '1',
    options: [
      {
        id: '24242',
        name: 'color',
        values: ['black']
      }
    ],
    variants: [
      {
        id: '122',
        title: 'prueba',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'ok',
            value: 'ok'
          }
        ],
        price: {
          amount: '20',
          currencyCode: 'USD'
        }
      }
    ],
    images: [
      {
        url: 'https://www.merchlife.co/product_two.jpg',
        altText: 'ok'
      }
    ],
    description: 'ok',
    availableForSale: true,
    priceRange: {
      minVariantPrice: {
        amount: '20',
        currencyCode: 'USD'
      },
      maxVariantPrice: {
        amount: '25',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://www.merchlife.co/product_two.jpg',
      height: '200',
      width: '100',
      altText: 'ook'
    }
  };
  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: any) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts() {
  // const relatedProducts = await getProductRecommendations(id);
  const relatedProducts = [
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
        url: 'https://www.merchlife.co/product_two.jpg'
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
  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key="ok"
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/ok`}>
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
