import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
import { PageBuilder } from '@/components/PageBuilder';
import { sanityFetch } from '@/sanity/lib/live';
import { HeroSection } from '@/components/shared/hero';

export default async function Home() {
  // const { data: page } = await sanityFetch({
  //   query: HOME_PAGE_QUERY,
  // });

  // return page?.homePage?.content ? (
  //   <PageBuilder content={page?.homePage?.content as any} />
  // ) : null;
  return (
    <div className='relative'>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000,#1a1a1a)] opacity-90" />
      </div>
      <HeroSection />
    </div>
  )
}
