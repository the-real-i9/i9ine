import GRPCIcon from "../../../icons/techs/GRPCIcon"
import HTTPIcon from "../../../icons/techs/HTTPIcon"
import WebSockIcon from "../../../icons/techs/WebSockIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Protocols() {
  return (
    <div className="skill-cat cat-protocols">
      <SkillCatHead catName="Protocols.">
        <span className="absolute -top-4 -right-3 font-bold text-bgray-500 text-sm">
          API Styles.
        </span>
      </SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "HTTP",
            skillIcon: () => <HTTPIcon className="w-4.5" />,
          },
          {
            skillName: "HTTP3/QUIC",
          },
          {
            skillName: "WebSocket",
            skillIcon: () => <WebSockIcon className="w-4.5" />,
          },
          {
            skillName: "gRPC",
            skillIcon: () => <GRPCIcon className="w-4.5" />,
          },
          {
            skillName: "REST API",
          },
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-protocols`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Protocols
