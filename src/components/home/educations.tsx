'use client'

import { motion } from 'framer-motion'

import { animate, transitions, variants, whileInView } from '@/utils/animations'
import { AiIllustration } from '@/components/home/experiments/ai-illustration'
import { GeneratedIllustration } from '@/components/home/experiments/generated-illustration'
import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import CompanyLogos from '@/components/svgs/company-logos'

// Eductions
export const educations = [
  {
    major: 'Computer Science',
    college: 'Mercu Buana University',
    link: 'https://mercubuana.ac.id/',
    illustration: <AiIllustration />,
  },
  {
    major: 'Software Engineering',
    college: 'SMK Adi Sanggoro',
    link: 'https://adisanggoro.sch.id/',
    illustration: <GeneratedIllustration />,
  },
]

// Educations
export default function Educations() {
  return (
    <div className="order-2 col-span-12 flex flex-col-reverse border-x border-gray-30 dark:border-gray-500 lg:order-1 lg:col-span-5 lg:flex-col xl:col-span-4">
      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex h-64 flex-1 flex-col border-t border-gray-30 px-4 py-5 md:px-8 md:py-8 dark:border-gray-500 lg:border-t-0"
      >
        <SectionTitle title="Educations" icon={Icons.Suitcase} />

        <div className="mt-4 grid grid-cols-6 gap-4 xs:gap-5">
          {educations.map((education) => {
            return (
              <motion.a
                transition={transitions.default}
                variants={variants.fadeInDown}
                target="_blank"
                href={education.link}
                key={education.major}
                className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
              >
                <div className="flex h-full items-center justify-between space-x-4 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                  <div className="flex-shrink-0 p-6 pr-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-none">
                      {education.major}
                    </h3>
                    <div className="mt-2 text-md md:text-lg leading-snug text-gray-50">
                      {education.college}
                    </div>
                  </div>

                  {education.illustration}
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
