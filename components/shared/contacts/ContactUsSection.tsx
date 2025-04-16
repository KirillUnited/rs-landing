import { Card } from '@heroui/card';
import React from 'react';

export const ContactUsSection: React.FC = () => (
  <section id='contacts' className="relative">
    <div className="container py-24 grid lg:grid-cols-2 gap-8 items-center">
      {/* Contact Info Block */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
        <p className="text-foreground-600 mb-6 text-balance">
          Есть вопросы или нужна помощь? Свяжитесь с нами, и наша команда ответит вам в кратчайшие сроки.
        </p>
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Эл. почта:</span> info@yourcompany.com
          </div>
          <div>
            <span className="font-semibold">Телефон:</span> +1 (555) 123-4567
          </div>
          <div>
            <span className="font-semibold">Адрес:</span> ул. Главная 123, Город, Страна
          </div>
        </div>
      </div>
      {/* Google Map Block */}
      <div className="flex-1 rounded-xl overflow-hidden shadow-md min-h-[300px] bg-gray-700">
        <iframe
          title="Карта Google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019013031727!2d-122.41941518468113!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4a0b0b0b0b0b0b0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ minHeight: '300px', border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);