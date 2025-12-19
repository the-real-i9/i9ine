import GitHubIcon from "../../../icons/socials/GitHubIcon"
import BashIcon from "../../../icons/techs/BashIcon"
import ChromeIcon from "../../../icons/techs/ChromeIcon"
import DockerIcon from "../../../icons/techs/DockerIcon"
import GitIcon from "../../../icons/techs/GitIcon"
import LinuxIcon from "../../../icons/techs/LinuxIcon"
import OpenAPIIcon from "../../../icons/techs/OpenAPIIcon"
import PostgreSQLIcon from "../../../icons/techs/PostgreSQLIcon"
import PostmanIcon from "../../../icons/techs/PostmanIcon"
import VSCodeIcon from "../../../icons/techs/VSCodeIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_BackDevTools() {
  return (
    <div className="skill-cat cat-back-dev-tools">
      <SkillCatHead catName="Backend Dev. Tools.">{null}</SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "pgAdmin",
            skillIcon: () => <PostgreSQLIcon className="w-4.5" />,
          },
          {
            skillName: "Git",
            skillIcon: () => <GitIcon className="w-4.5" />,
          },
          {
            skillName: "GitHub",
            skillIcon: () => <GitHubIcon className="w-4.5 fill-white" />,
          },
          {
            skillName: "GitHub Actions",
          },
          {
            skillName: "Postman",
            skillIcon: () => <PostmanIcon className="w-4.5" />,
          },
          {
            skillName: "cURL",
          },
          {
            skillName: "Chrome DevTools",
            skillIcon: () => <ChromeIcon className="w-4.5" />,
          },
          {
            skillName: "Docker",
            skillIcon: () => <DockerIcon className="w-4.5" />,
          },
          {
            skillName: "OpenAPI Spec.",
            skillIcon: () => <OpenAPIIcon className="w-4.5" />,
          },
          {
            skillName: "VSCode",
            skillIcon: () => <VSCodeIcon className="w-4.5" />,
          },
          {
            skillName: "Bash",
            skillIcon: () => <BashIcon className="w-4.5" />,
          },
          {
            skillName: "Linux",
            skillIcon: () => <LinuxIcon className="w-4.5" />,
          },
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-back-dev-tools`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_BackDevTools
