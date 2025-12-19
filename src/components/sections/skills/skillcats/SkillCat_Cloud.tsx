import GCSIcon from "../../../icons/techs/GCSIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Cloud() {
  return (
    <div className="skill-cat cat-cloud">
      <SkillCatHead catName="Cloud Services.">{null}</SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "Google Cloud Platform",
            skillIcon: () => <GCSIcon className="w-4.5" />,
          },
          /* {
            skillName: "Google Cloud Storage",
          },
          {
            skillName: "Google APIs",
          }, */
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-cloud`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Cloud
