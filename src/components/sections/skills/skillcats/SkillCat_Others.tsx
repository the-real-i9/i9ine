import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Others() {
  return (
    <div className="skill-cat cat-others">
      <SkillCatHead catName="Soft Skills & Extra.">{null}</SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "Logical Reasoning",
          },
          {
            skillName: "Problem Solving",
          },
          {
            skillName: "Analytical Skills",
          },
          {
            skillName: "Product Thinking",
          },
          {
            skillName: "UX Thinking",
          },
          {
            skillName: "Communication",
          },
          {
            skillName: "Graphics Design (Theory & Practice)",
          },
          {
            skillName: "Touch Typing (>60WPM)",
          },
        ].map(({ skillName }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-others`}
            skillName={skillName}
            skillIcon={undefined}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Others
