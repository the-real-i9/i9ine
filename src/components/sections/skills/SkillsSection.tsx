import CIcon from "../../icons/techs/CIcon"
import ExpressJSIcon from "../../icons/techs/ExpressJSIcon"
import GoIcon from "../../icons/techs/GoIcon"
import JSIcon from "../../icons/techs/JSIcon"
import NodeJSIcon from "../../icons/techs/NodeJSIcon"
import TypescriptIcon from "../../icons/techs/TypescriptIcon"
import SectionHeader from "../../SectionHeader"
import SkillCatHead from "./SkillCatHead"
import SkillSnippet from "./SkillSnippet"
import SkillSnippetsWrapper from "./SkillSnippetsWrapper"

function SkillsSection() {
  return (
    <section className="w-full pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Skills" className="mb-24" />

        <div className="skill-cats">
          <div className="cat-languages w-96">
            <div className="relative w-fit">
              <SkillCatHead catName="Languages." />
              <span className="absolute -top-3 -right-1.5 font-bold text-bgray-500">
                Runtimes.
              </span>
              <span className="absolute -top-[23px] -right-4 font-bold text-bgray-500 text-xs">
                API Frameworks.
              </span>
            </div>
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
                  skillName: "C",
                  skillIcon: () => <CIcon className="w-4.5" />,
                },
                {
                  skillName: "SQL",
                },
                {
                  skillName: "PLpgSQL",
                },
                {
                  skillName: "CypherQL",
                },
              ].map(({ skillName, skillIcon }, index) => (
                <SkillSnippet
                  key={`skill-${index}-cat-lang`}
                  skillName={skillName}
                  skillIcon={skillIcon}
                  index={index}
                />
              ))}
              <div className="skill-snippet flex space-x-1.5 items-center bg-bgray-700 w-fit pl-2 pr-2.5 py-0.5 rounded-lg opacity-0">
                <span className="font-medium text-xs">X</span>
              </div>
            </SkillSnippetsWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
