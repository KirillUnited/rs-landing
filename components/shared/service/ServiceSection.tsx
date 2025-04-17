import { services } from '@/config/site';
import { ServiceCard } from './ServiceCard';

export const ServiceSection = () => {
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
