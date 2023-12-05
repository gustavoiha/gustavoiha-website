import SectionHero from './_components/section-hero'
import SectionBio from './_components/section-bio'
import SectionTechnologies from './_components/section-technologies'
import SectionLocation from './_components/section-location'
import SectionStrenghts from './_components/section-strengths'
import SectionEducation from './_components/section-education'
import SectionNature from './_components/section-nature'
import Section3DPrinting from './_components/section-3d-printing'

export default function Home () {
  return (
    <div>
      <SectionHero />

      <SectionBio />

      <SectionTechnologies />

      <SectionLocation />

      <SectionStrenghts />

      <SectionEducation />

      <SectionNature />

      <Section3DPrinting />
    </div>
  )
}
