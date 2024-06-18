'use client'

import { motion } from 'framer-motion'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import TechIcons from '@/components/svgs/tech-icons'
import { UntickIllustration } from '@/components/home/experiments/untick-illustration'
import { animate, whileInView, transitions, variants } from '@/utils/animations'

export const programmingLanguageStacks = [
  {
    name: 'JS',
    logo: <TechIcons.JS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Type Script',
    logo: <TechIcons.TypeScript className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'PHP',
    logo: <TechIcons.PHP className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Dart',
    logo: <TechIcons.PHP className="h-20 md:h-28 w-auto" />,
  },
]

export const backendStacks = [
  {
    name: 'Node JS',
    logo: <TechIcons.NodeJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Nest JS',
    logo: <TechIcons.NestJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Koa JS',
    logo: <TechIcons.NestJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Express JS',
    logo: <TechIcons.NestJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Django/Django REST',
    logo: <TechIcons.Django className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Lumen/Laravel',
    logo: <TechIcons.Laravel className="h-20 md:h-28 w-auto" />,
  },
]

export const frontendStacks = [
  {
    name: 'Vue JS',
    logo: <TechIcons.VueJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Nuxt JS',
    logo: <TechIcons.NuxtJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'React JS',
    logo: <TechIcons.ReactJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Next JS',
    logo: <TechIcons.NextJS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Vite JS',
    logo: <TechIcons.ViteJS className="h-20 md:h-28 w-auto" />,
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
    name: 'PWA',
    logo: <TechIcons.PWA className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Pinia',
    logo: <TechIcons.Pinia className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Web Pack',
    logo: <TechIcons.WebPack className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'JQuery',
    logo: <TechIcons.JQuery className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Sass',
    logo: <TechIcons.Sass className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'HTML5',
    logo: <TechIcons.HTML5 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'CSS3',
    logo: <TechIcons.CSS3 className="h-20 md:h-28 w-auto" />,
  },
]

export const databaseStacks = [
  {
    name: 'Postgre SQL',
    logo: <TechIcons.PostgreSQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'MySQL',
    logo: <TechIcons.MySQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Maria DB',
    logo: <TechIcons.MySQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'GraphQL',
    logo: <TechIcons.GraphQL className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Mongo DB',
    logo: <TechIcons.MongoDB className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Dyanmo DB',
    logo: <TechIcons.MongoDB className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Firestore',
    logo: <TechIcons.MongoDB className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Redis',
    logo: <TechIcons.Redis className="h-20 md:h-28 w-auto" />,
  },
]

export const cssFrameworkStacks = [
  {
    name: 'Tailwind CSS',
    logo: <TechIcons.TailwindCSS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Bulma CSS',
    logo: <TechIcons.BulmaCSS className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Bootstrap CSS',
    logo: <TechIcons.Bootstrap className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Materialize CSS',
    logo: <TechIcons.Bootstrap className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Headless UI',
    logo: <TechIcons.HeadlessUI className="h-20 md:h-28 w-auto" />,
  },
]

export const cloudStacks = [
  {
    name: 'Serverless',
    logo: <TechIcons.Serverless className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Docker',
    logo: <TechIcons.Docker className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Kubernetes',
    logo: <TechIcons.Docker className="h-20 md:h-28 w-auto" />,
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
    name: 'S3',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Lambda',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Cloud Front',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Route 53',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'ELB',
    logo: <TechIcons.EC2 className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Google Cloud',
    logo: <TechIcons.GoogleCloud className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'GCP Function',
    logo: <TechIcons.GoogleCloud className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Analytics',
    logo: <TechIcons.Analytics className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'GTM',
    logo: <TechIcons.Analytics className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Firebase',
    logo: <TechIcons.Firebase className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Digital Ocean',
    logo: <TechIcons.DigitalOcean className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Droplets',
    logo: <TechIcons.DigitalOcean className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Godaddy',
    logo: <TechIcons.DigitalOcean className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Vercel',
    logo: <TechIcons.DigitalOcean className="h-20 md:h-28 w-auto" />,
  },
]

export const messageQueuingStacks = [
  {
    name: 'Rabbit MQ',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'SQS',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'SNS',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
]

export const thirdPartyIntegrationsStacks = [
  {
    name: 'Twilio',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Xendit',
    logo: <TechIcons.AirTable className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Qontak',
    logo: <TechIcons.AirTable className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Air Table',
    logo: <TechIcons.AirTable className="h-20 md:h-28 w-auto" />,
  },
]

export const projectManagementStacks = [
  {
    name: 'Jira',
    logo: <TechIcons.Jira className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Atlassian',
    logo: <TechIcons.Atlassian className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Trello',
    logo: <TechIcons.Atlassian className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Click Up',
    logo: <TechIcons.Atlassian className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Asana',
    logo: <TechIcons.Atlassian className="h-20 md:h-28 w-auto" />,
  },
]

export const sourceCodeManagementStacks = [
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
]

export const extensionStacks = [
  {
    name: 'NPM',
    logo: <TechIcons.NPM className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Yarn',
    logo: <TechIcons.NPM className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'ESLint',
    logo: <TechIcons.ESLint className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Prettier',
    logo: <TechIcons.Prettier className="h-20 md:h-28 w-auto" />,
  },
]

export const toolsStacks = [
  {
    name: 'VS Code',
    logo: <TechIcons.VSCode className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Android Studio',
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
    name: 'Figma',
    logo: <TechIcons.Figma className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Slack',
    logo: <TechIcons.Slack className="h-20 md:h-28 w-auto" />,
  },
]

export const osStacks = [
  {
    name: 'MacOS',
    logo: <TechIcons.Ubuntu className="h-20 md:h-28 w-auto" />,
  },
  {
    name: 'Ubuntu',
    logo: <TechIcons.Ubuntu className="h-20 md:h-28 w-auto" />,
  },
]

// TechStacks
export default function TechStacks() {
  return (
    <div className="col-span-12 bg-dotted-light dark:bg-dotted-dark border-x border-t border-gray-30 bg-gray-5/20 bg-center px-4 py-4 md:px-8 md:py-8 dark:border-gray-500 dark:bg-transparent">
      {/* Title */}
      <SectionTitle title="Tech Stacks" icon={Icons.Heart} />

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-6 md:mt-8 md:ml-8"
      >
        <span className="italic text-sm md:text-lg text-white transition-colors group-hover:text-green-500">
          Programming Languages
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {programmingLanguageStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Back-End Technologies
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {backendStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Front-End Technologies
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {frontendStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Database
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {databaseStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          CSS Frameworks
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {cssFrameworkStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Cloud Computing
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {cloudStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Message Queuing Technologies
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {messageQueuingStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Third Party Integrations
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {thirdPartyIntegrationsStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Project Management
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {projectManagementStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Source Code Management
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {sourceCodeManagementStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Extensions
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {extensionStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          Tools
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {toolsStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="flex w-full ml-4 mt-10 md:mt-16 md:ml-8"
      >
        <span className="italic text-sm md:text-md lg:text-lg text-white transition-colors group-hover:text-green-500">
          System Operation
        </span>
      </motion.div>

      <motion.div
        {...whileInView}
        whileInView="show"
        transition={transitions.default}
        variants={variants.fadeInDown}
        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4"
      >
        {osStacks.map((stack) => (
          <div
            key={stack.name}
            className="active:translate-y-[1px] flex flex-col justify-center items-center"
          >
            {stack.logo}
            <span className="text-xs text-center -mt-2">
              {stack.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
