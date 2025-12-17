import CSSIcon from "../../../icons/techs/CSSIcon"
import FigmaIcon from "../../../icons/techs/FigmaIcon"
import HTMLIcon from "../../../icons/techs/HTMLIcon"
import ReactIcon from "../../../icons/techs/ReactIcon"
import TailwindCSSIcon from "../../../icons/techs/TailwindCSSIcon"
import ViteIcon from "../../../icons/techs/ViteIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Frontend() {
  return (
    <div className="cat-frontend w-96">
      <SkillCatHead catName="Frontend Skills & Tools.">{null}</SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "HTML5",
            skillIcon: () => <HTMLIcon className="w-4.5" />,
          },
          {
            skillName: "CSS3",
            skillIcon: () => <CSSIcon className="w-4.5" />,
          },
          {
            skillName: "TailwindCSS",
            skillIcon: () => <TailwindCSSIcon className="w-4.5" />,
          },
          {
            skillName: "Web APIs",
          },
          {
            skillName: "React (JSX, TSX)",
            skillIcon: () => <ReactIcon className="w-4.5" />,
          },
          {
            skillName: "Vite",
            skillIcon: () => <ViteIcon className="w-4.5" />,
          },
          {
            skillName: "Figma",
            skillIcon: () => <FigmaIcon className="w-4.5" />,
          },
          {
            skillName: "Graphics Design (Theory & Practice)",
          },
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-frontend`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Frontend
