import CIcon from "../../../icons/techs/CIcon"
import ExpressJSIcon from "../../../icons/techs/ExpressJSIcon"
import GoIcon from "../../../icons/techs/GoIcon"
import JSIcon from "../../../icons/techs/JSIcon"
import NodeJSIcon from "../../../icons/techs/NodeJSIcon"
import TypescriptIcon from "../../../icons/techs/TypescriptIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Languages() {
  return (
    <div className="skill-cat cat-languages">
      <SkillCatHead catName="Languages.">
        <span className="absolute -top-3 -right-1.5 font-bold text-bgray-500">
          Runtimes.
        </span>
        <span className="absolute -top-[23px] -right-4 font-bold text-bgray-500 text-xs">
          API Frameworks.
        </span>
      </SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "Go",
            skillIcon: () => <GoIcon className="w-7" />,
          },
          {
            skillName: "JavaScript",
            skillIcon: () => <JSIcon className="w-4.5" />,
          },
          {
            skillName: "Typescript",
            skillIcon: () => <TypescriptIcon className="w-4.5" />,
          },
          {
            skillName: "Node.js",
            skillIcon: () => <NodeJSIcon className="w-4.5" />,
          },
          {
            skillName: "Express.js",
            skillIcon: () => <ExpressJSIcon className="w-4.5" />,
          },
          {
            skillName: "PLpgSQL",
          },
          {
            skillName: "C",
            skillIcon: () => <CIcon className="w-4.5" />,
          },
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-languages`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Languages
