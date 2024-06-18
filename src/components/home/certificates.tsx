'use client'

import { motion } from 'framer-motion'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { UntickIllustration } from '@/components/home/experiments/untick-illustration'
import { animate, transitions, variants } from '@/utils/animations'

export const certificates = [
  {
    role: 'Senior Software Engineer',
    company: 'Inovata',
    period: 'Apr 2024 - Present',
    link: 'https://inovatain.com/',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Senior Software Engineer',
    company: 'Gromura',
    period: 'Aug 2023 - Apr 2024',
    link: 'https://gromura.com/',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Software Engineer',
    company: 'InKanteen',
    period: 'Apr 2022 - Aug 2023',
    link: 'https://inkanteen.com',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Profesional Freelancer',
    company: 'Worldwide',
    period: 'Nov 2021 - Oct 2022',
    link: 'https://redek.co',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Software Engineer',
    company: 'Futuready',
    period: 'Feb 2019 - Nov 2021',
    link: 'https://futuready.com',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Web Developer',
    company: 'Indonesia Smartcloud',
    period: 'May 2018 - Jan 2019',
    link: 'https://smartcloud.id',
    illustration: <UntickIllustration />,
  },
  {
    role: 'Web Developer',
    company: 'Radar Bogor',
    period: 'Jul 2017 - Sep 2017',
    link: 'https://radarbogor.id',
    illustration: <UntickIllustration />,
  },
]

// Certificates
export default function Certificates() {
  return (
    <div className="order-3 col-span-12 border-x border-t border-gray-30 bg-gray-5/20 bg-center p-4 dark:border-gray-500 dark:bg-transparent xs:p-8 xl:order-3 xl:col-span-4 xl:border-l-0 xl:border-t-0">
      {/* Title */}
      <SectionTitle title="Licenses & certificates" icon={Icons.Fire} />

      {/* List of certificates */}
      <motion.div
        {...animate}
        transition={{ ...transitions.default, delay: 0.75 }}
        variants={variants.staggerChildren}
        className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5"
      >
        {certificates.map((experience) => {
          return (
            <motion.a
              transition={transitions.default}
              variants={variants.fadeInDown}
              target="_blank"
              href={experience.link}
              key={experience.role}
              className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 last:max-[1103px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
            >
              {/* Experiment */}
              <div className="flex h-full items-center justify-between space-x-4 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                <div className="flex-shrink-0 p-6 pr-2">
                  <h3 className="text-xl md:text-xl ld:text-2xl font-bold leading-none">
                    {experience.role}
                  </h3>
                  <div className="mt-1 text-sm md:text-md leading-snug text-gray-50">
                    {experience.company}
                  </div>
                  <div className="mt-2 text-sm md:text-md italic leading-snug text-gray-50">
                    {experience.period}
                  </div>
                </div>

                {experience.illustration}
              </div>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
