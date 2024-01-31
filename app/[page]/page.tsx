import type { Metadata } from 'next';

import Prose from 'components/prose';

export const runtime = 'edge';

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  // const page = await getPage(params.page);

  // if (!page) return notFound();

  return {
    title: 'Merchlife',
    description: 'Descripcion',
    openGraph: {
      publishedTime: '2024-01-30 08:00:00',
      modifiedTime: '2024-01-30 08:00:00',
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  // const page = await getPage(params.page);

  // if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Merchlife</h1>
      <Prose className="mb-8" html={'data' as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date('2024-01-30 08:00:00'))}.`}
      </p>
    </>
  );
}
