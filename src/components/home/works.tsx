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
    description:
      'NestJS, Postgres, Typeorm, Microservices',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Customer Web App',
    description: '-',
    link: 'https://app.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Dashboard Web App',
    description: '-',
    link: 'https://dashboard.gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Gromura Supply Chain API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Gromura Web Official',
    description: '-',
    link: 'https://gromura.com/',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'InKanteen Supply Chain API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Connect API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Catering API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Dashboard API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'InKanteen Customer Web App',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Redek Online Dispute Resolution API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Mira Merchant API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Mira Merchant Web App',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Friends Web App',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Isuzu HAT Web',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Covid19 Web',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Mainwebsite',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Microsite E-Form',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Zoho Adapter',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Channel Backend API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Contact Center API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Financial Service API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Pricing Car API',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Product Catalog',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Aegon Direct Integrations',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'FIB Thailand Payment Gateway Integrations',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'FIB Thailand Automation Report',
    description: '-',
    link: '#',
    tag: 'API',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Dicoding Movie Catalogue Mobile App',
    description: '-',
    link: '#',
    tag: 'APP',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Smartcloud CARfix ERP',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Web Official & PPDB SMK Adi Sanggoro',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
  {
    name: 'Web Inventory Radar Bogor',
    description: '-',
    link: '#',
    tag: 'WEB',
    illustration: Illustrations.Windows,
  },
]

// Works
export default function Works() {
  return (
    <div className="col-span-12 border-x border-t border-gray-30 bg-gray-5/20 bg-dotted-light bg-center p-4 dark:border-gray-500 dark:bg-transparent dark:bg-dotted-dark xs:p-8">
      {/* Title */}
      <SectionTitle title="Portofolio`s" icon={Icons.Code} />

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
            <Link href={work.link} target="_blank" className="h-full w-full">
              <work.illustration className="absolute text-gray-20 dark:text-gray-500/80" />
              {/* Content */}
              <div className="relative flex h-full flex-col items-start bg-white/50 p-8 transition-colors group-hover/card:bg-transparent dark:bg-gray-950/50">
                <h2 className="text-2xl font-bold tracking-snug">
                  {work.name}
                </h2>

                { work.tag === 'API' ? (
                  <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                    <div className="text-sm font-bold leading-none text-gray-1000 dark:text-red-500">
                      {work.tag}
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-red-400 dark:group-hover/card:bg-red-400">
                      <Icons.Fire className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                    </div>
                  </div>
                ) : work.tag === 'WEB' ? (
                  <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                    <div className="text-sm font-bold leading-none text-gray-1000 dark:text-cyan-500">
                      {work.tag}
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-cyan-500 group-hover/card:bg-cyan-500 dark:border-gray-200 dark:group-hover/card:border-cyan-400 dark:group-hover/card:bg-cyan-400">
                      <Icons.ChatChin className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                    </div>
                  </div>
                ) : (
                  <div className="inline-flex mt-2 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
                    <div className="text-sm font-bold leading-none text-gray-1000 dark:text-yellow-500">
                      {work.tag}
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-yellow-500 group-hover/card:bg-yellow-500 dark:border-gray-200 dark:group-hover/card:border-yellow-400 dark:group-hover/card:bg-yellow-400">
                      <Icons.ChatChin className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
                    </div>
                  </div>
                )
              }

                <div className="mb-10 mt-6 flex-1 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                  {work.description}
                </div>

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
