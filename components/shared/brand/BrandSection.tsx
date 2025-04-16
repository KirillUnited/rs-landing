import { Card, CardBody } from '@heroui/card'
import Image from 'next/image'

const brands = [
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes-benz-logo.svg' },
  { name: 'Audi', logo: '/images/brands/audi-logo.svg' },
  { name: 'Lexus', logo: '/images/brands/lexus-logo.svg' },  
  { name: 'Mercedes-Benz-2', logo: '/images/brands/mercedes-benz-logo.svg' },
]

export default function BrandSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-foreground-900 sm:text-4xl">
            Работаем со всеми премиальными брендами
          </h2>
          <p className="mt-4 text-xl text-foreground-600">
            Профессиональное обслуживание автомобилей премиум-класса
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className='bg-content1'
            >
              <CardBody className="relative h-16 justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            И многие другие премиальные автомобильные бренды
          </p>
        </div>
      </div>
    </section>
  )
}