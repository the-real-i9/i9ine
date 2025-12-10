import SectionHeader from "../../SectionHeader"
import SkillCat_Databases from "./skillcats/SkillCat_Databases"
import SkillCat_Languages from "./skillcats/SkillCat_Languages"

function SkillsSection() {
  return (
    <section className="w-full pt-24 pb-10">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Skills" className="mb-20" />

        <div className="skill-cats flex space-x-10">
          <SkillCat_Languages />
          <SkillCat_Databases />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
