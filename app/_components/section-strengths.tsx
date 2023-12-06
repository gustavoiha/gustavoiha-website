import ExperienceTime from './experience-time'

export default function () {
  return (
    <section className="bg-gradient-to-t from-slate-200 to-slate-50 from-15% to-15% md:from-10% md:to-10%">
      <div className="max-w-screen-lg mx-auto w-full pt-32 px-5">
        <h2 className="text-h2 font-medium text-slate-950">
          Why work with me?
        </h2>

        <p className="text-p1 text-slate-950 mt-12">
          I am a fast learning, creative, collaborative, multidisciplinary, dedicated, and
          curious tech savvy engineer who's always <span className="text-blue-800 font-medium">eager to learn</span> new ways of building technology!
        </p>

        <p className="text-p1 text-slate-950 mt-8">
          I thrive in a <span className="text-blue-800 font-medium">responsibilities-heavy role</span>,
          working very close to C-levels and product decision-makers.
        </p>

        <p className="text-p1 text-slate-950 mt-8">
          You'll often see me make dozens of pull request suggestions and ask team members for another set of eyes on the code I'm writing.
        </p>

        <div className="mt-24">
          <ExperienceTime />
        </div>
      </div>
    </section>
  )
}
