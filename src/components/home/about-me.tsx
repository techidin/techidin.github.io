'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import Signature from '@/components/svgs/signature'
import Social from '@/components/shared/social'
import { animate, transitions, variants } from '@/utils/animations'

// About component
export default function AboutMe() {
  return (
    <div className="order-2 col-span-12 flex flex-col border-x border-gray-30 dark:border-gray-500 md:order-1 md:col-span-6 min-[896px]:col-span-7 xl:col-span-4">
      {/* Intro */}
      <div className="px-4 pt-4 xs:px-10 xs:pt-10">
        <motion.h2
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="text-5xl font-bold tracking-snug"
        >
          About me
        </motion.h2>
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.staggerChildren}
          className="mt-6 space-y-6 text-lg leading-normal text-gray-50"
        >
          <motion.p
            variants={variants.fadeInDown}
            transition={transitions.default}
          >
            I’m from <span className="text-gray-1000 underline decoration-green-400 dark:text-white">Indonesia</span> working as a <span className="text-gray-1000 underline decoration-green-400 dark:text-white">Software Engineer.</span> With over <span className="text-gray-1000 underline decoration-green-400 dark:text-white">6 years</span> of extensive experience as a <span className="text-gray-1000 underline decoration-green-400 dark:text-white">Software Engineer</span>, I have spearheaded numerous transformative technology projects across various industries
          </motion.p>
          <motion.p
            variants={variants.fadeInDown}
            transition={transitions.default}
          >
            My expertise encompasses sophisticated API development, web applications, integrated systems, and the implementation of tailored solutions that address complex business challenges. I have a proven track record of developing and deploying a wide range of systems including <span className="text-gray-1000 underline decoration-green-400 dark:text-white">supply chain management systems</span>, <span className="text-gray-1000 underline decoration-green-400 dark:text-white">ordering systems</span>, and <span className="text-gray-1000 underline decoration-green-400 dark:text-white">retail systems</span>
            
            {/* I like to{' '}
          
            , nerd over cool{' '}
            <Link
              target="_blank"
              href="https://www.youtube.com/watch?v=TeVbYCIFVa8"
              className="text-gray-1000 underline decoration-green-400 dark:text-white"
            >
              space rockets
            </Link>{' '}
            and learn more about math and artificial intelligence. */}
          </motion.p>
        </motion.div>

        {/* <Signature className="mt-8 h-10" delay={2} /> */}
      </div>

      {/* Contact */}
      <div className="px-8 pb-8 mt-12 text-right">
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="mb-2 text-sm font-bold uppercase"
        >
          Find me at
        </motion.div>
        <motion.div
          {...animate}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="mb-4 font-medium text-gray-50"
        >
          idinz.dev@gmail.com
        </motion.div>

        {/* Icons */}
        <Social />
      </div>
    </div>
  )
}
