'use client'

import { motion } from 'framer-motion'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { UntickIllustration } from '@/components/home/experiments/untick-illustration'
import { animate, transitions, variants } from '@/utils/animations'

export const certificates = [
  {
    name: 'Alibaba Cloud Associate',
    company: 'Alibaba Cloud Academy',
    period: 'Feb 2020 - Feb 2022',
    credential_id: 'IACA01200200004632L',
    credential_url: 'https://edu.alibabacloud.com/clouder/Certificate/search?type=1&num=IACA01200200004632L',
  },
  {
    name: 'Android App Fundamentals',
    company: 'Dicoding Academy',
    period: 'Feb 2020 - Feb 2023',
    credential_id: null,
    credential_url: 'https://drive.google.com/file/d/1b2E12U3eVR1-RxUz_1AYy8PTVjqmYwXV/view?usp=drivesdk',
  },
  {
    name: 'Android App for Beginners',
    company: 'Dicoding Academy',
    period: 'Sept 2019 - Sept 2022',
    credential_id: null,
    credential_url: 'https://drive.google.com/file/d/1azLUCfFB-7SF78V3Xwk4hkDme2HjK8zf/view?usp=drivesdk',
  },
  {
    name: 'Certified Secure Computer User',
    company: 'EC-Council',
    period: 'Jan 2020 - Lifetime',
    credential_id: 'ECC0145683972',
    credential_url: 'https://aspen.eccouncil.org/Verify',
  },
  {
    name: 'Data Science Methodology',
    company: 'Cognitive Class',
    period: 'Dec 2020 - Lifetime',
    credential_id: null,
    credential_url: 'https://courses.cognitiveclass.ai/certificates/76d26af0db64490f87fb1453c7e6909d',
  },
  {
    name: 'Python 101 for Data Science',
    company: 'Cognitive Class',
    period: 'Nov 2020 - Lifetime',
    credential_id: null,
    credential_url: 'https://courses.cognitiveclass.ai/certificates/7894ac2909d54109aa29792ca867e0be',
  },
  {
    name: 'Machine Learning with Python',
    company: 'Cognitive Class',
    period: 'Dec 2020 - Lifetime',
    credential_id: null,
    credential_url: 'https://courses.cognitiveclass.ai/certificates/7145a46f21204194a592631af9f53fd0',
  },
  {
    name: 'Qwiklabs Quest',
    company: 'Qwiklabs',
    period: 'Lifetime',
    credential_id: null,
    credential_url: 'https://www.qwiklabs.com/public_profiles/602b7a7d-57f4-4813-aad7-5aa94cd5c49e',
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
              href={experience.credential_url}
              key={experience.name}
              className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 last:max-[1103px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
            >
              {/* Experiment */}
              <div className="flex h-full items-center justify-between space-x-4 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                <div className="flex-shrink-0 p-6 pr-2">
                  <h3 className="text-lg md:text-xl ld:text-2xl font-bold leading-none">
                    {experience.name}
                  </h3>
                  <div className="mt-1 text-sm md:text-md leading-snug text-gray-50">
                    {experience.company} ({experience.period})
                  </div>

                { experience.credential_id !== null ? 
                  (
                    <div className="mt-2 text-sm md:text-md leading-snug text-gray-20">
                      Certificate ID: {experience.credential_id}
                    </div>
                  ) : <></>
                }
                </div>
              </div>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
