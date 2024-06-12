'use client'

import { motion } from 'framer-motion'

import { transitions, variants } from '@/utils/animations'

// Logo
export default function Logo({ className }: { className?: string }) {
  return (
    <motion.svg
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      viewBox="0 0 1211 195"
      fill="none"
      className={className}
    >
      <motion.path
        transition={transitions.default}
        variants={variants.fadeInDown}
        d="M18.75 154.25V135.5H56.25V41.75H18.75V23H131.25V41.75H93.75V135.5H131.25V154.25H18.75ZM168.75 154.25V135.5H150V79.25H168.75V60.5H243.75V23H281.25V154.25H168.75ZM187.5 135.5H243.75V79.25H187.5V135.5ZM356.25 41.75V23H393.75V41.75H356.25ZM318.75 154.25V135.5H356.25V79.25H337.5V60.5H393.75V135.5H431.25V154.25H318.75ZM450 154.25V60.5H562.5V79.25H581.25V154.25H543.75V79.25H487.5V154.25H450Z"
        fill="currentColor"
      />
      <motion.path
        transition={transitions.default}
        variants={variants.fadeInDown}
        d="M649 154.25V23H742.75V41.75H761.5V60.5H780.25V116.75H761.5V135.5H742.75V154.25H649ZM686.5 135.5H724V116.75H742.75V60.5H724V41.75H686.5V135.5ZM817.75 154.25V135.5H799V79.25H817.75V60.5H911.5V79.25H930.25V116.75H836.5V135.5H911.5V154.25H817.75ZM836.5 98H892.75V79.25H836.5V98ZM1005.25 154.25V135.5H986.5V116.75H967.75V60.5H1005.25V116.75H1042.75V60.5H1080.25V116.75H1061.5V135.5H1042.75V154.25H1005.25Z"
        fill="currentColor"
      />
      <motion.path
        transition={transitions.default}
        variants={variants.fadeInDown}
        d="M1129 148V98H1179V148H1129Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}
