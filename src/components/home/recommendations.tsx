'use client'

import { motion } from 'framer-motion'

import React from "react"
import { animate, transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { ButtonSmall } from '@/components/shared/buttons'

export const recommendations = [
  {
    name: 'Vinna Setiawati',
    position: 'Digital Transformation | Business Strategic | Value Creation',
    description: 'Idin has great both technical and personality skills. He is hardworking and hard learning, nothing is impossible for Idin.\n\n I was impressed by him during the time working together his understanding of tools and scope, even he needs to learn new tools and programming language, he can catch up and grew far more than that of his peers.\n\nIt’s not just his technical skills that impress me, however. It is a pleasure work with Idin and an honor being his leader because of his amazingly positive attitude and eagerness to stick tightly to deadlines.\n\nHis can-do attitude and team building skills were also necessary and valued not just by myself, but by his peers, who often relied on his to get the job done.'
  },
  {
    name: 'Kuncoro Wicaksono',
    position: '10+ Years of Software Engineering Excellence | Delivering Impactful Solutions',
    description: '\nWe call him, idin. He had skill, fast learner and good attitude.\n\n'
  },
  {
    name: 'Budi Santoso',
    position: 'Solutions Architect - PT Traspac Makmur Sejahtera',
    description: 'Idin is programmer with a good personality and good in designing website i`ve ever seen in my team. \n\nIdin is very adaptable to the latest application design trend. In addition he is also proficient in developing website based on complex business process.'
  },
  {
    name: 'Muhammad Ramdan',
    position: 'React Native Developer | Mobile Developer | Frontend Developer',
    description: '\nIdin is multi talented developer, fast learner, and great developer!\n\n'
  },
  {
    name: 'Affan Yusuf Fadillah',
    position: 'Backend Engineer at Lifepack.id',
    description: '\nI call him Idin. He has excellent skills in all areas, managerial and technical individual. \n\nHe is a fast learner, problem solver and has a good attitude.\n\n'
  },
]

// Recommendations
export default function Recommendations() {
  interface RecommendationData {
    name: string,
    position: string,
    description: string,
  }

  const [showModal, setShowModal] = React.useState(false);
  const [selectedRecommendation,setSelectedRecommendation] = React.useState<RecommendationData | null>(null);

  return (
    <div className="relative order-2 col-span-12 border-r border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 lg:order-2 lg:col-span-7 xl:col-span-8">
      <div className="border-l border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent lg:border-l-0">
        {showModal && selectedRecommendation !== null ? (
          <>
            <motion.div
              {...whileInView}
              transition={transitions.default}
              variants={variants.fadeInDown}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative overflow-hidden w-full my-6 px-4 mx-auto max-w-3xl">
                {/*content*/}
                <div className="bg-white group/card dark:bg-gray-800 border-0 rounded-xl md:rounded-2xl shadow-2xl relative flex flex-col w-full outline-none focus:outline-none">
                  <div className="relative flex items-start justify-between py-2 md:py-4 px-4 md:px-6 border-b border-solid border-gray-400 rounded-t">
                    <div className="flex flex-col w-full">
                      <p className="text-lg inline-flex md:text-xl lg:text-2xl mr-3 font-semibold">
                        { selectedRecommendation.name }
                      </p>
                      <p className="italic text-gray-50 text-sm md:text-md lg:text-lg leading-relaxed">
                        { selectedRecommendation.position }
                      </p>
                    </div>
                  </div>
                  <div className="relative px-4 pt-7 pb-8 md:px-6 flex-auto text-sm md:text-md lg:text-lg">
                    <p className="leading-snug text-gray-40 whitespace-pre-line">
                      {selectedRecommendation.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end pl-6 pt-2 pb-3 md:pt-4 md:pb-5 md:pr-1 border-t border-gray-400 border-solid rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xs md:text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0">
          <SectionTitle title="Recommendations" icon={Icons.ChatChin} />
        </div>
        {/* List of Recommendations */}
        <motion.div
          {...animate}
          transition={{ ...transitions.default, delay: 0.75 }}
          variants={variants.staggerChildren}
          className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5"
        >
          {recommendations.map((recommendation) => {
            return (
              <motion.div
                transition={transitions.default}
                variants={variants.fadeInDown}
                key={recommendation.name}
                onClick={() => {
                  setShowModal(true);
                  setSelectedRecommendation(recommendation);
                }}
                className="group/card cursor-pointer relative col-span-6 overflow-hidden rounded-2xl border border-gray-30 bg-white bg-gradient-to-br from-gray-35 via-white to-gray-40 transition-colors hover:border-gray-35 active:top-[1px] dark:border-gray-500 dark:bg-gray-1000 dark:from-gray-900 dark:via-gray-1000 dark:to-gray-800 dark:hover:border-gray-200/70 last:max-[1103px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
              >
                {/* Experiment */}
                <div className="flex h-full items-center justify-between space-x-4 bg-white transition-colors hover:bg-white/90 dark:bg-gray-1000 dark:hover:bg-transparent">
                  <div className="flex-shrink-0 w-full p-6">
                    <span className="text-xl md:text-xl ld:text-2xl font-bold leading-none">
                      {recommendation.name}
                    </span>
                    <div className="mt-1 text-sm md:text-md italic leading-snug text-gray-50">
                      {recommendation.position}
                    </div>
                    <div className="mt-2 flex">
                      <p className="line-clamp-2 text-sm md:text-md leading-snug text-gray-40">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
