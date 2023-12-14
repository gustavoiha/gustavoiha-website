import { ReactElement } from 'react'
import ExperienceTime from '@/app/_components/experience-time'

export default function WorkExperience (): ReactElement {
  return (
    <article>
      <section className="bg-gradient-to-t from-slate-200 to-slate-50 from-15% to-15% md:from-10% md:to-10%">
        <div className="max-w-screen-lg mx-auto w-full pt-20 md:pt-32 px-5">
          <h1 className="text-h1 text-purple-800 font-medium">
            My professional experience
          </h1>

          <p className="text-p1 text-slate-950 mt-10">
            A multidisciplinary nerd with a passion for writing code, 3D printing stuff, talking about businesses and science in general.
          </p>

          <div className="mt-24">
            <ExperienceTime />
          </div>
        </div>
      </section>

      <section className="bg-slate-200">
        <div className="max-w-screen-lg mx-auto w-full py-32 px-5">
          <p className="text-subtitle text-slate-950">
            sep 2019 - aug 2023
          </p>

          <h2 className="text-h2 text-slate-950 mt-3">
            Senior Full-Stack Engineer (Individual Contributor)
          </h2>

          <p className="text-h3 text-blue-800 font-medium mt-3">
            Revelo
          </p>

          <p className="mt-12">
            I joined Revelo in 2019 as part of a full-stack software engineer formation program along with 7 other junior engineers. We spent 6 weeks studying and developing applications on Ruby on Rails. We learned how to do TDD, how to refine and plan development tasks, how to create database migrations, and build features in an MVC architecture.
          </p>

          <p className="mt-8">
            As soon as the formation program ended, all 7 of us were assigned to work alongside other more senior engineers in product/design/engineering squads.
            My first assignment was to develop features for an extensive RoR monolith application that Revelo's corporate clients had access to.
            In under a few months, I assumed more and more responsibility as I proved myself capable of taking care of the entire development cycle with little to no help.
          </p>

          <p className="mt-8">
            From there on, my responsibilities became progressively more complex:
          </p>

          <ul className="list-disc pl-8">
            <li>develop features in several VueJS 2 SPA applications</li>
            <li>configure GitHub Actions CI/CD pipelines</li>
            <li>contribute to a Docker development environment, writing features and fixing bugs to help developers work more smoothly</li>
            <li>architect complex Ruby on Rails models considering their future maintainability and interaction with other back-end applications</li>
            <li>develop features on RESTful API back-end applications that communicated with each other inside a private AWS network via RESTful APIs and RabbitMQ with Sidekiq and Sneakers</li>
            <li>migrate VueJS 2 applications to VueJS 3 and composition API</li>
            <li>migrate a legacy VueJS 2 application with users to a new domain with VueJS 3 pointing to new RESTful API endpoints</li>
            <li>work on the company's Design System along with UI/UX designers to improve user and developer experience</li>
            <li>build front-end applications on Nuxt with SSG data fetching to focus on SEO. I worked with two junior engineers, whom I weekly trained and mentored, and we launched a product from the ground up in under 3 months</li>
          </ul>

          <p className="mt-8">
            My career progressed over the years:
          </p>

          <ul className="list-disc pl-8">
            <li>In 2022 I was promoted to Senior Full-Stack Engineer</li>
            <li>In 2020 I was promoted to Mid-level Full-Stack Engineer</li>
            <li>In 2019 I started as a Junior Full-Stack Engineer</li>
          </ul>
        </div>
      </section>
    </article>
  )
}
