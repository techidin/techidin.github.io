'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Illustrations from '@/components/svgs/illustrations'
import Icons from '@/components/svgs/icons'

export const works = [
  {
    name: 'Inovata Merchant API',
    description: 'Is a comprehensive set of tools and services designed for merchants to manage their businesses online. It offers functionalities such as product management, order management (handling customer orders and tracking their status), inventory management (tracking stock levels and availability), customer management (maintaining customer information and purchase history), and payment processing (integrating with payment gateways for secure transactions).',
    techs:
      'NestJS, MySQL, TypeORM, Microservices, GCP, Whatsapp Bot, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier, Scheduler',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Customer Web App',
    description: 'Is a user-friendly platform designed for customers to easily view product catalogs and price lists, and place orders directly through the web app. It provides a seamless shopping experience by allowing customers to browse products, check prices, and make purchases conveniently online.',
    techs: 
      'VueJS, Vite, PWA, Pinia, Tailwind CSS, i18n, Day.js, Swiper, Litepicker, Pica, Eslint, Jest, Prettier',
    link: 'https://app.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Dashboard Web App',
    description: 'Is a comprehensive platform designed to streamline business operations by providing a centralized interface for managing various aspects of the supply chain. It offers features for warehouse management,  employee management, sales agent management, product management, stock management, tracking inventory levels, POS/sales order processing, reporting and analytics and customer management. ',
    techs: 
      'VueJS, Vite, PWA, Pinia, Tailwind CSS, i18n, Chart.js, Day.js, Print.js, Swiper, Litepicker, Pica, Eslint, Jest, Prettier',
    link: 'https://dashboard.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Supply Chain API',
    description: 'Is a robust set of tools and services designed to optimize and manage supply chain operations. It includes functionalities for warehouse management,  employee management, sales agent management, product management, stock management, tracking inventory levels, POS/sales order processing, reporting and analytics and customer management.',
    techs: 
      'NestJS, PostgreSQL, TypeORM, Microservices, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier, Scheduler',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Web Official',
    description: '',
    techs: 
      'VueJS, Vite, PWA, Pinia, Tailwind CSS, i18n, Day.js, Swiper, Eslint, Jest, Prettier',
    link: 'https://gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'InKanteen Supply Chain API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Microservices, AWS, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Dashboard API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Winston, Microservices, AWS, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Core API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Winston, Microservices, AWS, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Order API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Winston, Microservices, AWS, i18n, QR Code Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Connect API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Winston, Xendit, Microservices, AWS, Node Mailer, Handlebar, i18n, Excel Export, CSV Export, PDF Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Catering API',
    description: '',
    techs:
      'NestJS, MySQL, TypeORM, RabbitMQ, Winston, Microservices, AWS, i18n, Excel Export, CSV Export, PDF Generator, QR Code Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Customer Web App',
    description: '',
    techs:
      'VueJS, Vite, PWA, Tailwind CSS, AWS, i18n, Day.js, Swiper, Shimmer, Eslint, Jest, Prettier',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Redek Online Dispute Resolution API',
    description: '',
    techs:
      'NestJS, PostgreSQL, TypeORM, Microservices, i18n, PDF Generator, Passport, Eslint, Jest, Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Mira Merchant API',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Mira Merchant Web App',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Friends Web App',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Isuzu HAT Web',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Covid19 Web',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Mainwebsite',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Microsite E-Form',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Zoho Adapter',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Channel Backend API',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Contact Centre API',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Financial Service API',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Pricing Car API',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Product Catalog',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Aegon Direct Integrations',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Payment Gateway Integrations',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Automation Report',
    description: '',
    techs: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Dicoding Movie Catalogue Mobile App',
    description: '',
    techs: '-',
    link: '#',
    tag: 'APP',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Smartcloud CARfix ERP',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Web Official & PPDB SMK Adi Sanggoro',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Web Inventory Radar Bogor',
    description: '',
    techs: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
]

// Works
export default function Works() {
  return (
    <div className="col-span-12 bg-dotted-light dark:bg-dotted-dark border-x border-t border-gray-30 bg-gray-5/20  bg-center px-4 py-5 md:px-8 md:py-8 dark:border-gray-500 dark:bg-transparent ">
      {/* Title */}
      <SectionTitle title="Portfolio`s" icon={Icons.Code} />

      {/* List of work */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
        {works.map((work) => (
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            key={work.name}
            className="group/card relative col-span-6 overflow-hidden rounded-2xl border-b border-t-0 border-gray-10 bg-gradient-to-br from-gray-10 via-white to-gray-5 active:top-[1px] dark:border-b-0 dark:border-gray-50/20 dark:from-gray-1000 dark:via-gray-800 dark:to-gray-950 md:col-span-3 last:md:col-span-6 lg:col-span-2 last:lg:col-span-2"
          >
            {/* <Link href={work.link} target="_blank" className="h-full w-full"> */}
            <Link href={work.link} className="h-full w-full">
              <work.illustration className="absolute text-gray-20 dark:text-gray-500/80" />
              {/* Content */}
              <div className="relative flex h-full flex-col items-start bg-white/50 p-8 transition-colors group-hover/card:bg-transparent dark:bg-gray-950/50">
                <div className="inline-flex w-full justify-end">
                  { work.tag === 'API' ? (
                      <div className="-mr-8 -mt-8 items-center rounded-tr-2xl rounded-bl-xl border border-red-30 bg-white py-2 px-6 transition-colors group-hover/card:border-red-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-sm font-bold leading-none text-gray-1000 dark:text-red-500">
                          {work.tag}
                        </div>
                      </div>
                    ) : work.tag === 'WEB' ? (
                      <div className="-mr-8 -mt-8 items-center rounded-tr-2xl rounded-bl-xl border border-cyan-30 bg-white py-2 px-6 transition-colors group-hover/card:border-cyan-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-sm font-bold leading-none text-gray-1000 dark:text-cyan-500">
                          {work.tag}
                        </div>
                      </div>
                    ) : (
                      <div className="-mr-8 -mt-8 items-center rounded-tr-2xl rounded-bl-xl border border-yellow-30 bg-white py-2 px-6 transition-colors group-hover/card:border-yellow-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-sm font-bold leading-none text-gray-1000 dark:text-yellow-500">
                          {work.tag}
                        </div>
                      </div>
                    )
                  }
                </div>

                <h2 className="text-lg lg:text-xl -mt-1 font-bold tracking-snug">
                  {work.name}
                </h2>
                {/* 
                { work.tag === 'API' ? (
                  <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 px-4 transition-colors group-hover/card:border-red-40 dark:border-red-900 dark:bg-gray-900 dark:group-hover/card:border-red-200">
                    <div className="text-sm font-bold leading-none text-gray-1000 dark:text-red-500">
                      {work.tag}
                    </div>
                  </div>
                  ) : work.tag === 'WEB' ? (
                    <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 px-4 transition-colors group-hover/card:border-cyan-40 dark:border-cyan-900 dark:bg-gray-900 dark:group-hover/card:border-cyan-200">
                      <div className="text-sm font-bold leading-none text-gray-1000 dark:text-cyan-500">
                        {work.tag}
                      </div>
                    </div>
                  ) : (
                    <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-yellow-30 bg-white py-2 px-4 transition-colors group-hover/card:border-yellow-40 dark:border-yellow-900 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                      <div className="text-sm font-bold leading-none text-gray-1000 dark:text-yellow-500">
                        {work.tag}
                      </div>
                    </div>
                  )
                } */}

                {/* <div className="mb-4 mt-6 flex-1 space-y-6 text-sm md:text-md leading-normal text-gray-50">
                  {work.description}
                </div> */}

                {/* <div className="mb-4 mt-6 flex-1 space-y-6 text-md md:text-lg leading-normal text-gray-50">
                  {work.techs}
                </div> */}

                {/* <div className="inline-flex items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                  <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
                    View more
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-green-400 dark:group-hover/card:bg-green-400">
                    <Icons.Arrow className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                  </div>
                </div> */}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
