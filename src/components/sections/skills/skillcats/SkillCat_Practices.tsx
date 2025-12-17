import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Practices() {
  return (
    <div className="cat-practices w-96">
      <SkillCatHead catName="Practices.">{null}</SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "Unit Testing",
          },
          {
            skillName: "Integration Testing",
          },
          {
            skillName: "Performance Optimization",
          },
          {
            skillName: "API Documentation",
          },
          {
            skillName: "Web Integration",
          },
          {
            skillName: "Logging and Monitoring",
          },
        ].map(({ skillName }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-practices`}
            skillName={skillName}
            skillIcon={undefined}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Practices
