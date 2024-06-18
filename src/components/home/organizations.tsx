'use client'

import { motion } from 'framer-motion'

import { animate, transitions, variants, whileInView } from '@/utils/animations'
import { AiIllustration } from '@/components/home/experiments/ai-illustration'
import { GeneratedIllustration } from '@/components/home/experiments/generated-illustration'
import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import CompanyLogos from '@/components/svgs/company-logos'

// Organizations
export const organizations = [
  {
    name: 'Google Developer Group Bogor',
    level: 'Volunteer (2017 - Present)',
    illustration: <AiIllustration />,
  },
]

// Organizations
export default function Organizations() {
  return (
    <div className="order-3 col-span-12 flex flex-col-reverse border-x border-gray-30 dark:border-gray-500 lg:order-1 lg:col-span-5 lg:flex-col xl:col-span-4">
      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex h-64 flex-1 flex-col border-t border-gray-30 px-4 py-5 md:px-8 md:py-8 dark:border-gray-500 lg:border-t-0"
      >
        <SectionTitle title="Organizations" icon={Icons.Suitcase} />

        <div className="mt-4 grid gap-4 xs:gap-5">
          {organizations.map((organization) => {
            return (
              <motion.a
                transition={transitions.default}
                variants={variants.fadeInDown}
                target="_blank"
                key={organization.name}
                className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
              >
                <div className="flex h-full items-center justify-between space-x-4 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                  <div className="flex-shrink-0 p-6 pr-2">
                    <h3 className="text-lg md:text-lg lg:text-xl font-bold leading-none">
                      {organization.name}
                    </h3>
                    <div className="mt-2 text-md md:text-lg leading-snug text-gray-50">
                      {organization.level}
                    </div>
                  </div>

                  {organization.illustration}
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
