'use client'

import { motion } from 'framer-motion'
import useSWR from 'swr'

import { animate, transitions, variants } from '@/utils/animations'
import { type CurrentlyPlaying } from '@/utils/spotify'
import Icons from '@/components/svgs/icons'

export function Resume() {
  return (
    <motion.div
      {...animate}
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      className="col-span-12 flex-col items-end justify-end border-x border-t border-gray-30 bg-gradient-to-br from-gray-30/30 via-white to-white p-8 text-right dark:border-gray-500 dark:from-gray-700 dark:via-gray-1000 dark:to-gray-1000 md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4"
    >
          <motion.a
            transition={transitions.default}
            variants={variants.fadeInDownRotate}
            href="/files/cv_ahmad_muhyidin.pdf"
            target="_blank"
            className="inline-flex md:mb-5 items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
            <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
              Download CV
            </div>
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-green-400 dark:group-hover/card:bg-green-400">
              <Icons.ArrowDown className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
            </div>
          </motion.a>

          {/* <div
            className="mb-4 w-full border-b border-gray-30 pb-4 dark:border-gray-500"
          >
          </div> */}

          {/* <motion.div
            transition={transitions.default}
            variants={variants.fadeInDownRotate}
            className="inline-flex items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover/card:border-gray-200">
            <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
              Explore Portofolio
            </div>
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hover/card:border-green-500 group-hover/card:bg-green-500 dark:border-gray-200 dark:group-hover/card:border-green-400 dark:group-hover/card:bg-green-400">
              <Icons.Code className="h-2 w-2 text-gray-100 transition-colors group-hover/card:text-white dark:text-white dark:group-hover/card:text-gray-1000" />
            </div>
          </motion.div> */}
    </motion.div>
  )
}
