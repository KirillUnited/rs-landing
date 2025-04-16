import { urlFor } from '@/sanity/lib/image';
import { PAGE_QUERYResult } from '@/sanity/types';
import { Button } from '@heroui/button'
import { CalendarIcon } from 'lucide-react';
import { PortableText } from 'next-sanity';
import Image from 'next/image'
import Link from 'next/link'

// type HeroProps = Extract<
//   NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
//   { _type: "hero" }
// >;

// export default function HeroSection({ slogan, title, text, image }: HeroProps) {

//   return (
//     <section className="relative">
//       <div className="relative isolate overflow-hidden after:bg-gradient-to-tr after:from-black after:to-gray-900 after:w-full after:h-full after:block after:inset-0 after:absolute after:-z-0 after:opacity-85">
//         {image ? (
//           <Image
//             priority
//             alt=""
//             src={urlFor(image).width(1600).height(800).url() || ''}
//             className="absolute inset-0 z-0 size-full object-cover"
//             width={1600}
//             height={800}
//           />
//         ) : null}
//         <div className="relative z-10">
//           <div className="container py-32 sm:py-48 lg:py-56">
//             <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//               <div className="relative text-center px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
//                 {/* <span className='font-bold'>RS</span> — первый центр лазерной эпиляции с технологией Ice-Cool и системой 3D-сканирования кожи */}
//                 {slogan ? slogan : null}
//               </div>
//             </div>
//             <article className="text-center max-w-4xl flex flex-col gap-8 mx-auto">
//               <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
//                 <span className='bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]'>Лазерная эпиляция</span> — гладкая кожа навсегда!
//               </h1>
//               {/* <p className="text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
//                 Современная и безопасная лазерная эпиляция для удаления нежелательных волос на любом участке тела. Запишитесь на сеанс и забудьте о бритье и раздражении!
//               </p> */}
//               {text ? <div className='text-pretty text-lg font-medium text-gray-400 sm:text-xl/8'><PortableText value={text} /></div> : null}
//               <footer className="mt-10 flex items-center justify-center gap-x-6">
//                 <Button
//                 as={Link}
//                   href="/#appointment"
//                   className='uppercase font-semibold'
//                   color='primary'
//                   size='md'
//                   radius='none'
//                 >
//                   записаться
//                 </Button>
//                 <Link href="/#pricing" className="text-sm/6 font-semibold text-white">
//                   Узнать больше <span aria-hidden="true">→</span>
//                 </Link>
//               </footer>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000,#1a1a1a)] opacity-90" />
        </div>
        <div className="relative z-10">
          <div className="container py-24 sm:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 text-pretty">
                Восстановление кожаных сидений для вашего автомобиля.
                <span className="block mt-2 bg-gradient-to-r from-[#ceff06] to-[#49f866] bg-clip-text text-transparent">
                  Технология Litech
                </span>
              </h1>

              <p className="text-gray-400 text-lg sm:text-xl mb-8 text-pretty">
                Мы предлагаем профессиональное восстановление кожаных сидений,
                чтобы вернуть им первозданный вид. Наши эксперты используют
                только качественные материалы и современные технологии.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12">
                <Button
                  as={Link}
                  href="#"
                  
                  className='uppercase font-semibold'
                >
                  Узнать больше <span aria-hidden="true">→</span>
                </Button>

                <Button
                  as={Link}
                  href="#"
                  color='primary'
                  className='uppercase font-semibold'
                >
                  <CalendarIcon size={18} />
                  <span>Записаться</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src="/images/hero.png"
            alt="RS Remont Salona Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}