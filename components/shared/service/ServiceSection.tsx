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
    <Card as={Link} href="#" isFooterBlurred className='aspect-[3/2] after:absolute after:inset-0 after:bg-black/50 border-1 border-white/20'>
      <Image
        alt={title}
        className="object-cover w-full h-full"
        height={200}
        src={image}
        width={200}
      />
      <CardFooter className="flex-col items-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_16px)] shadow-small ml-2 z-10">
        <h3 className="text-xl font-semibold text-white/80 mb-2 line-clamp-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
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
      title: "Химчистка",
      description: "Профессиональная химчистка салона автомобиля, включая очистку сидений, ковриков и потолка.",
      image: "/images/service-1.jpg",
      price: "От 19 900 ₽"
    },
    {
      title: "Реставрация кожанных изделий",
      description: "Профессиональная реставрация кожаной обивки салона, устранение потертостей, трещин и царапин.",
      image: "/images/service-2.jpg",
      price: "От 59 900 ₽"
    },
    {
      title: "Защита кожи от повреждений",
      description: "Нанесение защитного покрытия на кожаные элементы салона для предотвращения износа и повреждений.",
      image: "/images/service-3.jpg",
      price: "От 14 900 ₽"
    }
  ]

  return (
    <section id='services' className='bg-content2'>
      <div className="container py-24">
        <div className="text-center mb-12 flex flex-col gap-4">
          <span className="inline-block px-4 py-1 border-1 border-primary rounded-full text-xs font-semibold self-center">
            Наши Услуги
          </span>
          <h2 className="text-4xl font-bold text-foreground-900">Опытный уход за Вашим автомобилем</h2>
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
