'use client'

import { motion } from 'framer-motion'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import TechIcons from '@/components/svgs/tech-icons'
import { UntickIllustration } from '@/components/home/experiments/untick-illustration'
import { animate, whileInView, transitions, variants } from '@/utils/animations'

export const techStacks = [
  {
    name: 'JS',
    logo: <TechIcons.JS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'TypeScript',
    logo: <TechIcons.TypeScript className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'NodeJS',
    logo: <TechIcons.NodeJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'NPM',
    logo: <TechIcons.NPM className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'NestJS',
    logo: <TechIcons.NestJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'ViteJS',
    logo: <TechIcons.ViteJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'VueJS',
    logo: <TechIcons.VueJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'NuxtJS',
    logo: <TechIcons.NuxtJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Pinia',
    logo: <TechIcons.Pinia className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'ReactJS',
    logo: <TechIcons.ReactJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'NextJS',
    logo: <TechIcons.NextJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'PWA',
    logo: <TechIcons.PWA className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'WebPack',
    logo: <TechIcons.WebPack className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'JQuery',
    logo: <TechIcons.JQuery className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Python',
    logo: <TechIcons.Python className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Django',
    logo: <TechIcons.Django className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'PHP',
    logo: <TechIcons.PHP className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Laravel',
    logo: <TechIcons.Laravel className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Flutter',
    logo: <TechIcons.Flutter className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Android',
    logo: <TechIcons.Android className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'PostgreSQL',
    logo: <TechIcons.PostgreSQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'MySQL',
    logo: <TechIcons.MySQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'GraphQL',
    logo: <TechIcons.GraphQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'MongoDB',
    logo: <TechIcons.MongoDB className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Redis',
    logo: <TechIcons.Redis className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'HTML5',
    logo: <TechIcons.HTML5 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'CSS3',
    logo: <TechIcons.CSS3 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'TailwindCSS',
    logo: <TechIcons.TailwindCSS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'BulmaCSS',
    logo: <TechIcons.BulmaCSS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Bootstrap',
    logo: <TechIcons.Bootstrap className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'HeadlessUI',
    logo: <TechIcons.HeadlessUI className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Sass',
    logo: <TechIcons.Sass className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'AWS',
    logo: <TechIcons.AWS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'EC2',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'GoogleCloud',
    logo: <TechIcons.GoogleCloud className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'DigitalOcean',
    logo: <TechIcons.DigitalOcean className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Serverless',
    logo: <TechIcons.Serverless className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Analytics',
    logo: <TechIcons.Analytics className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Firebase',
    logo: <TechIcons.Firebase className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Jira',
    logo: <TechIcons.Jira className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Atlassian',
    logo: <TechIcons.Atlassian className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'AirTable',
    logo: <TechIcons.AirTable className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'ESLint',
    logo: <TechIcons.ESLint className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Prettier',
    logo: <TechIcons.Prettier className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Git',
    logo: <TechIcons.Git className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Github',
    logo: <TechIcons.Github className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Gitlab',
    logo: <TechIcons.Gitlab className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Bitbucket',
    logo: <TechIcons.Bitbucket className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Docker',
    logo: <TechIcons.Docker className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Ubuntu',
    logo: <TechIcons.Ubuntu className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'VSCode',
    logo: <TechIcons.VSCode className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Postman',
    logo: <TechIcons.Postman className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Swagger',
    logo: <TechIcons.Swagger className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'JSON',
    logo: <TechIcons.JSON className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Slack',
    logo: <TechIcons.Slack className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Figma',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
]

// TechStacks
export default function TechStacks() {
  return (
    <div className="col-span-12 bg-dotted-light dark:bg-dotted-dark border-x border-t border-gray-30 bg-gray-5/20 bg-center px-4 py-4 md:px-8 md:py-8 dark:border-gray-500 dark:bg-transparent">
      {/* Title */}
      <SectionTitle title="Tech Stacks" icon={Icons.Heart} />

      {/* List of tech stacks */}
      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4 mt-4 xs:mt-6"
      >
        {techStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
