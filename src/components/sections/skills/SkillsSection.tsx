import SectionHeader from "../../SectionHeader"
import SkillCat_BackDevTools from "./skillcats/SkillCat_BackDevTools"
import SkillCat_Cloud from "./skillcats/SkillCat_Cloud"
import SkillCat_Databases from "./skillcats/SkillCat_Databases"
import SkillCat_Languages from "./skillcats/SkillCat_Languages"
import SkillCat_Others from "./skillcats/SkillCat_Others"
import SkillCat_Practices from "./skillcats/SkillCat_Practices"
import SkillCat_Protocols from "./skillcats/SkillCat_Protocols"
import SkillCat_Frontend from "./skillcats/SkillCat_Frontend"

function SkillsSection() {
  return (
    <section id="skills" className="w-full pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-6">
        <SectionHeader title="Skills" className="mb-26" />

        <div className="skill-cats flex space-x-6 space-y-16 flex-wrap">
          <SkillCat_Languages />
          <SkillCat_Databases />
          <SkillCat_Protocols />
          <SkillCat_Cloud />
          <SkillCat_Practices />
          <SkillCat_BackDevTools />
          <SkillCat_Frontend />
          <SkillCat_Others />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
