export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RS Pro – Профессиональный автосервис",
  description: "В RS Pro мы предоставляем первоклассные услуги по ремонту и обслуживанию автомобилей, чтобы ваш автомобиль всегда оставался в отличном состоянии. Наша команда сертифицированных механиков, современное оборудование и приверженность качеству позволяют нам справляться со всем — от планового техобслуживания до сложной диагностики и ремонта. Ремонт двигателя, замена тормозов, диагностика электрики — мы работаем точно, прозрачно и в кратчайшие сроки. Доверьтесь RS Pro — надёжному партнёру в обслуживании вашего автомобиля.",
  navItems: [
    {
      label: "Главная",
      href: "/",
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
      label: "Блог",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
