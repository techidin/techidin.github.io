'use client'

import { motion } from 'framer-motion'

import { animate, transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { ButtonSmall } from '@/components/shared/buttons'

export const hardskills = [
  {
    name: 'API Development',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'Mobile Development',
  },
  {
    name: 'Database Management',
  },
  {
    name: 'System Integrations',
  },
  {
    name: 'ERP System',
  },
  {
    name: 'Cloud Computing',
  },
  {
    name: 'Project Management',
  },
]

export const softskills = [
  {
    name: 'Leadership',
  },
  {
    name: 'Communication',
  },
  {
    name: 'Team Collaboration & Time Management',
  },
  {
    name: 'Problem Solving',
  },
  {
    name: 'Strategic & Analytical Thinking',
  },
  {
    name: 'Adaptability',
  },
  {
    name: 'Customer Focus',
  },
  {
    name: 'Conflict Resolution',
  },
]

// Skills
export default function Skills() {
  return (
    <div className="relative order-2 col-span-12 border-r border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 lg:order-2 lg:col-span-7 xl:col-span-8">
      <div className="border-l border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent lg:border-l-0">
        <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0">
          <SectionTitle title="Skills" icon={Icons.Labs} />
        </div>
        <div className="flex flex-col sm:flex-row mt-4 md:mt-0">
          <div className="flex flex-col justify-center divide-y divide-gray-500 pt-0 md:pt-8 md:pr-8 w-full md:w-1/2">
            {hardskills.map((skill) => {
              return (
                <motion.div
                  {...whileInView}
                  whileInView="show"
                  transition={transitions.default}
                  variants={variants.fadeInDown}
                  key={skill.name}
                  className="py-2">
                  <a
                    className="group inline-block active:translate-y-[1px]"
                  >
                    <span className="text-md md:text-lg text-white transition-colors group-hover:text-green-500">
                      - {skill.name}
                    </span>
                  </a>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-col justify-center divide-y divide-gray-500 pt-6 md:pt-8 w-full md:w-1/2">
            {softskills.map((skill) => {
              return (
                <motion.div
                  {...whileInView}
                  whileInView="show"
                  transition={transitions.default}
                  variants={variants.fadeInDown}
                  key={skill.name}
                  className="py-2">
                  <a
                    className="group inline-block active:translate-y-[1px]"
                  >
                    <span className="text-md md:text-lg text-gray-30 transition-colors group-hover:text-white">
                      - {skill.name}
                    </span>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
