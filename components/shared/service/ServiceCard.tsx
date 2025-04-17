import { Button } from '@heroui/button'
import { Card, CardFooter } from '@heroui/card'
import { ArrowUpRight } from 'lucide-react'
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
        <Card as={Link} href="#" isFooterBlurred className='aspect-square overflow-hidden after:absolute after:inset-0 after:bg-black/50 border-1 border-white/20'>
            <Image
                alt={title}
                className="object-cover w-full h-full"
                height={500}
                src={image}
                width={500}
            />
            <CardFooter className="flex-col items-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_16px)] shadow-small ml-2 z-10">
                <h3 className="text-xl font-semibold text-white/80 mb-2 line-clamp-2">{title}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
                <p className="text-primary-foreground font-bold text-lg rounded-md px-4 bg-primary">{price}</p>
                <Button
                    className="text-tiny text-white bg-black/50 mt-4 group"
                    color="default"
                    size="sm"
                    variant="flat"
                >
                    Подробнее
                    <ArrowUpRight size={14} className='group-hover:translate-x-1 transition-all' />
                </Button>
            </CardFooter>
        </Card>
    )
}