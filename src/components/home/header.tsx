'use client'

import { motion } from 'framer-motion'
import { transitions, variants, animate } from '@/utils/animations'

import Logo from '@/components/svgs/logo'
import Icons from '@/components/svgs/icons'
import { generateGreeting } from '@/utils/helpers'
import { Resume } from '@/components/home/resume'
import Drawing from '@/components/home/drawing'
import portrait from '@/assets/images/avatar.png'

// Header component
export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid h-2 max-w-8xl grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-10">
          <div className="col-span-10 border-x border-gray-30 dark:border-gray-500 md:col-span-4"></div>
          <div className="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-3"></div>
          <div className="col-span-1 hidden border-r border-gray-30 dark:border-gray-500 lg:block"></div>
          <div className="col-span-6 hidden border-r border-gray-30 dark:border-gray-500 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          {/* H1 */}
          <div className="col-span-12 md:col-span-4 border-x border-gray-30 px-4 py-6 md:p-4 dark:border-gray-500">
            <motion.div
              {...animate}
              variants={variants.fadeInDown}
              transition={transitions.default}
              className="relative flex items-center w-fit"
            >
              {/* Logo */}

              <motion.div
                {...animate}
                transition={{ ...transitions.default }}
                variants={variants.fadeInDownRotate}
                className="relative hidden md:flex h-16 w-16 md:h-24 md:w-24 mr-4 aspect-square rounded-2xl border-t border-gray-50/20 bg-gray-1000 bg-cover bg-center bg-no-repeat p-1 md:p-2 brightness-125 dark:brightness-100"
                style={{ backgroundImage: `url("${portrait.src}")` }}
              >
                <div className="flex w-full items-end rounded-xl border border-white/20 md:p-2 dark:border-blue-100/50">
                </div>
              </motion.div>

              <Logo className="h-8 min-[896px]:h-14 xl:h-16" />

              {/* Greeting */}
              <motion.div
                {...animate}
                variants={variants.fadeIn}
                transition={{ ...transitions.slow, delay: 1.5 }}
                className="absolute right-0 top-0 hidden -translate-y-6 translate-x-36 rounded-full bg-green-500 px-4 py-3 text-lg font-bold leading-none text-white dark:text-gray-1000 xs:inline-block lg:translate-x-full lg:translate-y-0"
              >
                <span className="inline-block">{generateGreeting()}</span>
                <Icons.ChatChin className="absolute -bottom-[9px] left-[7px] w-5 text-green-500" />
              </motion.div>
            </motion.div>
          </div>

          <div className="col-span-2 hidden md:block border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-3"></div>
          <div className="col-span-2 hidden border-r border-t border-gray-30 dark:border-gray-500 max-md:order-last lg:col-span-1 lg:block lg:border-t-0"></div>

          {/* Jams */}
          <Resume />
        </div>
      </header>
    </>
  )
}
