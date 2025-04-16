import React from 'react';
// You can use Heroicons or any icon library you prefer
import { CheckCircleIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Card } from '@heroui/card';

const features = [
    {
        icon: <SparklesIcon className="h-8 w-8 text-white" />,
        title: 'Качественный Выбор',
        description:
            'Наш сервис предоставляет профессиональный ремонт и обслуживание автомобилей всех марок, используя современное оборудование и оригинальные запчасти.',
    },
    {
        icon: <CurrencyDollarIcon className="h-8 w-8 text-white" />,
        title: 'Доступные Цены',
        description:
            'Наши тарифы на рестоврацию очень конкурентоспособны и доступны, позволяя нашим клиентам наслаждаться поездками в любой момент.',
    },
    {
        icon: <CheckCircleIcon className="h-8 w-8 text-white" />,
        title: 'Удобное Онлайн Бронирование',
        description:
            'С помощью нашей простой системы онлайн-бронирования клиенты могут быстро и удобно забронировать автомобиль в любом месте и в любое время.',
    },
];

export const FeaturesSection: React.FC = () => (
    <section className="relative bg-content2">
        <div className='container py-24'>
            <div className="text-center mb-10 flex flex-col gap-4">
                <span className="inline-block px-4 py-1 border-1 border-primary rounded-full text-xs font-semibold self-center">
                    Почему выбирают нас
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">Наши Услуги и Преимущества</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                {features.map((feature, idx) => (
                    <Card
                        key={idx}
                        className="items-center text-center p-6 flex-1"
                    >
                        <div className="bg-gray-700 rounded-full p-4 mb-4 flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-foreground-600 text-sm">{feature.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);