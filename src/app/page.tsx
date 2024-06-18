import Header from '@/components/home/header'
import AboutMe from '@/components/home/about-me'
import WorkExperiences from '@/components/home/work-experiences'
import Certificates from '@/components/home/certificates'
import Portrait from '@/components/home/portrait'
// import Companies from '@/components/home/companies'
import Educations from '@/components/home/educations'
// import Articles from '@/components/home/articles'
import Skills from '@/components/home/skills'
import TechStacks from '@/components/home/tech-stacks'
import Portfolios from '@/components/home/portfolio'
import Footer from '@/components/shared/footer'

import { getRecentArticles } from '@/utils/fetch-articles'

// Home page
export default async function Home() {
  let articles = await getRecentArticles()

  return (
    <div>
      <Header />

      {/* First section */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <AboutMe />
          <Portrait />
          <WorkExperiences />
          <Certificates />
        </div>
      </div>

      {/* Second section */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          {/* <Companies /> */}
          <Educations />
          <Skills />
          {/* <Articles articles={articles} /> */}
        </div>

        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <Portfolios />
        </div>

        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <TechStacks />
        </div>
      </div>

      <Footer />
    </div>
  )
}
