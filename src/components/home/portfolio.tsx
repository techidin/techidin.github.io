'use client'

import React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Illustrations from '@/components/svgs/illustrations'
import Icons from '@/components/svgs/icons'

export const portfolios = [
  {
    name: 'Inovata Merchant API',
    description: 'Is a comprehensive set of tools and services designed for merchants to manage their businesses online. It offers functionalities such as product management, order management (handling customer orders and tracking their status), inventory management (tracking stock levels and availability), customer management (maintaining customer information and purchase history), and payment processing (integrating with payment gateways for secure transactions).',
    techs:
      'NestJS · MySQL · TypeORM · Microservices · GCP · Whatsapp Bot · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier · Scheduler',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Customer Web App',
    description: 'Is a user-friendly platform designed for customers to easily view product catalogs and price lists, and place orders directly through the web app. It provides a seamless shopping experience by allowing customers to browse products, check prices, and make purchases conveniently online.',
    techs: 
      'VueJS · Vite · PWA · Pinia · Tailwind CSS · i18n · Day.js · Swiper · Litepicker · Pica · Eslint · Jest · Prettier',
    link: 'https://app.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Dashboard Web App',
    description: 'Is a comprehensive platform designed to streamline business operations by providing a centralized interface for managing various aspects of the supply chain. It offers features for warehouse management,  employee management, sales agent management, product management, stock management, tracking inventory levels, POS/sales order processing, reporting and analytics and customer management. ',
    techs: 
      'VueJS · Vite · PWA · Pinia · Tailwind CSS · i18n · Chart.js · Day.js · Print.js · Swiper · Litepicker · Pica · Eslint · Jest · Prettier',
    link: 'https://dashboard.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Supply Chain API',
    description: 'Is a robust set of tools and services designed to optimize and manage supply chain operations. It includes functionalities for warehouse management,  employee management, sales agent management, product management, stock management, tracking inventory levels, POS/sales order processing, reporting and analytics and customer management.',
    techs: 
      'NestJS · PostgreSQL · TypeORM · Microservices · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier · Scheduler',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Web Official',
    description: 'Is the official website of PT Karya Kreasi Nasional, a company operating in the Fast-Moving Consumer Goods (FMCG) and technology-based retail sectors.',
    techs: 
      'VueJS · Vite · Pinia · Tailwind CSS · i18n · Day.js · Swiper · Eslint · Jest · Prettier',
    link: 'https://gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'InKanteen Supply Chain API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Microservices · AWS · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Dashboard API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Winston · Microservices · AWS · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Core API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Winston · Microservices · AWS · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Order API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Winston · Microservices · AWS · i18n · QR Code Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Connect API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Winston · Xendit · Microservices · AWS · Node Mailer · Handlebar · i18n · Excel Export · CSV Export · PDF Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Catering API',
    description: '',
    techs:
      'NestJS · MySQL · TypeORM · RabbitMQ · Winston · Microservices · AWS · i18n · Excel Export · CSV Export · PDF Generator · QR Code Generator · Passport · Eslint · Jest · Prettier',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Customer Web App',
    description: '',
    techs:
      'VueJS · Vite · PWA · Tailwind CSS · AWS · i18n · Day.js · Swiper · Shimmer · Eslint · Jest · Prettier',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Redek Online Dispute Resolution API',
    description: '',
    techs:
      'VueJS · Vite · PWA · Tailwind CSS · AWS · i18n · Day.js · Swiper · Shimmer · Eslint · Jest · Prettier',
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

// Portfolios
export default function Portfolios() {
  interface PortfolioData {
    name: string,
    description: string,
    techs: string,
    link: string,
    tag: string,
    illustration: React.ElementType,
  }

  const [showModal, setShowModal] = React.useState(false);
  const [selectedPortfolio,setSelectedPortfolio] = React.useState<PortfolioData | null>(null);
  
  return (
    <div className="col-span-12 bg-dotted-light dark:bg-dotted-dark border-x border-t border-gray-30 bg-gray-5/20  bg-center px-4 py-5 md:px-8 md:py-8 dark:border-gray-500 dark:bg-transparent ">
      {showModal && selectedPortfolio !== null ? (
        <>
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative overflow-hidden w-full my-6 px-4 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-white group/card dark:bg-gray-800 border-0 rounded-xl md:rounded-2xl shadow-2xl relative flex flex-col w-full outline-none focus:outline-none">
                {/* <selectedPortfolio.illustration className="absolute right-2 text-gray-20 dark:text-gray-500/80" /> */}
                <div className="relative inline-flex w-full justify-end">
                  { selectedPortfolio.tag === 'API' ? (
                      <div className=" py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-red-30 bg-white transition-colors group-hover/card:border-red-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-red-500">
                          {selectedPortfolio.tag}
                        </div>
                      </div>
                    ) : selectedPortfolio.tag === 'WEB' ? (
                      <div className=" py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-cyan-30 bg-white transition-colors group-hover/card:border-cyan-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-cyan-500">
                          {selectedPortfolio.tag}
                        </div>
                      </div>
                    ) : (
                      <div className=" py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-yellow-30 bg-white transition-colors group-hover/card:border-yellow-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-yellow-500">
                          {selectedPortfolio.tag}
                        </div>
                      </div>
                    )
                  }
                </div>
                <div className="relative flex items-start justify-between -mt-3 pb-3 md:-mt-4 md:pb-6 px-4 md:px-6 border-b border-solid border-gray-400 rounded-t">
                  <div className="flex w-full md:w-10/12">
                    <h3 className="text-lg inline-flex md:text-xl lg:text-2xl mr-3 font-semibold">
                      { selectedPortfolio.name }
                    </h3>
                  </div>
                </div>
                <div className="relative px-4 py-2 md:px-6 flex-auto">
                  <p className="text-gray-30 text-sm md:text-md lg:text-lg leading-relaxed">
                    { selectedPortfolio.description }
                  </p>
                </div>
                <div className="relative px-4 py-4 md:px-6 flex-auto text-sm md:text-md lg:text-lg">
                  <span>Tech Stack:</span>
                  <p className="italic leading-normal text-gray-40">
                    {selectedPortfolio.techs}
                  </p>
                </div>

                <div className="flex items-center justify-end pl-6 pt-2 pb-3 md:pt-4 md:pb-5 md:pr-1 border-t border-gray-400 border-solid rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xs md:text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* Title */}
      <SectionTitle title="Portfolio`s" icon={Icons.Code} />

      {/* List of portfolio */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
        {portfolios.map((portfolio) => (
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            key={portfolio.name}
            className="group/card relative col-span-6 overflow-hidden rounded-2xl border-b border-t-0 border-gray-10 bg-gradient-to-br from-gray-10 via-white to-gray-5 active:top-[1px] dark:border dark:border-gray-50/20 dark:from-gray-1000 dark:via-gray-800 dark:to-gray-950 md:col-span-3 last:md:col-span-6 lg:col-span-2 last:lg:col-span-2"
          >
            {/* <Link href={portfolio.link} target="_blank" className="h-full w-full"> */}
            {/* target="_blank"
            href={portfolio.link} */}
            <motion.a
                transition={transitions.default}
                variants={variants.fadeInDown}
                key={portfolio.name}
                className="h-full w-full"
            >
            {/* <Link href={portfolio.link} className="h-full w-full"> */}
              <portfolio.illustration className="absolute text-gray-20 dark:text-gray-500/80" />
              {/* Content */}
              <div className="relative flex h-full flex-col items-start bg-white/50 p-6 md:p-8 transition-colors group-hover/card:bg-transparent dark:bg-gray-950/50">
                <div className="inline-flex w-full justify-end">
                  { portfolio.tag === 'API' ? (
                      <div className="-mr-6 md:-mr-8 -mt-6 md:-mt-8 py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-red-30 bg-white transition-colors group-hover/card:border-red-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-red-500">
                          {portfolio.tag}
                        </div>
                      </div>
                    ) : portfolio.tag === 'WEB' ? (
                      <div className="-mr-6 md:-mr-8 -mt-6 md:-mt-8 py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-cyan-30 bg-white transition-colors group-hover/card:border-cyan-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-cyan-500">
                          {portfolio.tag}
                        </div>
                      </div>
                    ) : (
                      <div className="-mr-6 md:-mr-8 -mt-6 md:-mt-8 py-1.5 md:py-2 px-4 md:px-6 items-center rounded-tr-2xl rounded-bl-xl border border-yellow-30 bg-white transition-colors group-hover/card:border-yellow-40 dark:border-gray-600 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                        <div className="text-xs md:text-sm font-bold leading-none text-gray-1000 dark:text-yellow-500">
                          {portfolio.tag}
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="flex w-10/12 -mt-3 md:-mt-4">
                  <h2 className="text-md text-gray-20 md:text-lg lg:text-xl font-bold tracking-snug">
                    {portfolio.name}
                  </h2>
                </div>

                <div className="flex w-full mt-4">
                  <p className="line-clamp-3 text-sm md:text-md leading-normal text-gray-40">
                    {portfolio.description}
                  </p>
                </div>

                <div className="flex w-full mt-6">
                  <p className="line-clamp-2 italic text-ellipsis text-xs md:text-sm leading-normal text-gray-50">
                    {portfolio.techs}
                  </p>
                </div>

                <div
                  onClick={() => {
                    setShowModal(true);
                    setSelectedPortfolio(portfolio);
                  }}
                  className="mt-6 cursor-pointer inline-flex items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200"
                >
                  <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
                    View more
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-green-400 dark:group-hover/card:bg-green-400">
                    <Icons.Arrow className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                  </div>
                </div>
              </div>
            </motion.a>
            {/* </Link> */}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
