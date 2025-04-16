import { Card, CardBody } from '@heroui/card'
import Image from 'next/image'

const brands = [
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes-benz-logo.svg' },
  { name: 'Audi', logo: '/images/brands/audi-logo.svg' },
  { name: 'Lexus', logo: '/images/brands/lexus-logo.svg' },  
  { name: 'Mercedes-Benz-2', logo: '/images/brands/mercedes-benz-logo.svg' },
  { name: 'Audi-2', logo: '/images/brands/audi-logo.svg' },
  { name: 'Lexus-2', logo: '/images/brands/lexus-logo.svg' },  
]

export default function BrandSection() {
  return (
    <section>
      <div className="container py-24">
        <div className="text-center mb-16 flex flex-col gap-4">
          <span className="inline-block px-4 py-1 border-1 border-primary rounded-full text-xs font-semibold self-center">
            Наши клиенты
          </span>
          <h2 className="text-3xl font-semibold text-foreground-900 sm:text-4xl">
            Работаем со всеми премиальными брендами
          </h2>
          <p className="text-foreground-600">
            Профессиональное обслуживание автомобилей премиум-класса
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
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
      </div>
    </section>
  )
}