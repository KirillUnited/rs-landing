// import { HOME_PAGE_QUERY } from '@/sanity/lib/queries';
// import { PageBuilder } from '@/components/PageBuilder';
// import { sanityFetch } from '@/sanity/lib/live';
import { HeroSection } from '@/components/shared/hero';
import { BrandSection } from '@/components/shared/brand';
import { ServiceSection } from '@/components/shared/service/ServiceSection';

export default async function Home() {
  // const { data: page } = await sanityFetch({
  //   query: HOME_PAGE_QUERY,
  // });

  // return page?.homePage?.content ? (
  //   <PageBuilder content={page?.homePage?.content as any} />
  // ) : null;
  return (
    <div className='relative'>
      <HeroSection />
      <BrandSection />
      <ServiceSection />
    </div>
  )
}
