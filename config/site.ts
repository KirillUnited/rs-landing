export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RS Pro – Профессиональный автосервис",
  description: "RS Pro – профессиональная реставрация и ремонт кожаных сидений автомобиля в Минске. Восстанавливаем цвет, устраняем потертости и повреждения. Опытные мастера и современные технологии.",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Услуги",
      href: "/#services",
    },
    {
      label: "Цены",
      href: "/#pricing",
    },
    {
      label: "О нас",
      href: "/#about",
    },
    {
      label: "Контакты",
      href: "/#contacts",
    },
  ],
  navMenuItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Услуги",
      href: "/#services",
    },
    {
      label: "Цены",
      href: "/#pricing",
    },
    {
      label: "О нас",
      href: "/#about",
    },
    {
      label: "Контакты",
      href: "/#contacts",
    },
  ],
  links: {
    instagram: "https://instagram.com/rs_pro",
    facebook: "https://facebook.com/rs_pro",
    twitter: "https://twitter.com/rs_pro",
    telegram: "https://t.me/rs_pro",
  },
};
export const services = [
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
];