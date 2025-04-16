import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price: string
}

export const ServiceCard = ({ title, description, image, price }: ServiceCardProps) => {
  return (
    <Card as={Link} href="#" isFooterBlurred className='aspect-[3/2]'>
      <Image
        alt={title}
        className="object-cover w-full h-full"
        height={200}
        src={image}
        width={200}
      />
      <CardFooter className="flex-col items-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_16px)] shadow-small ml-2 z-10">
        <h3 className="text-xl font-semibold text-foreground-800 mb-2">{title}</h3>
        <p className="text-foreground-600 mb-4">{description}</p>
        <p className="text-primary-foreground font-bold text-lg rounded-md px-4 bg-primary">{price}</p>
        {/* <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          Notify me
        </Button> */}
      </CardFooter>
    </Card>
  )
}

export const ServiceSection = () => {
  const services = [
    {
      title: "Полная Детализация Автомобиля",
      description: "Профессиональная чистка салона и кузова, полировка и защитное покрытие для вашего автомобиля.",
      image: "/images/service-1.jpg",
      price: "От 19 900 ₽"
    },
    {
      title: "Полировка и Керамическое Покрытие",
      description: "Удаление царапин и круговых разводов, плюс долговечное керамическое покрытие для защиты кузова.",
      image: "/images/service-2.jpg",
      price: "От 59 900 ₽"
    },
    {
      title: "Премиум Обслуживание",
      description: "Комплексное техническое обслуживание, включая замену масла, проверку тормозов и доливку жидкостей.",
      image: "/images/service-3.jpg",
      price: "От 14 900 ₽"
    }
  ]

  return (
    <section id='services'>
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground-900 mb-4">Наши Услуги</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Испытайте новейшие технологии в обслуживании автомобилей с нашим спектром специализированных услуг
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
