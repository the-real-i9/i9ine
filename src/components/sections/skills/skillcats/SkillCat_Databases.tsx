import Neo4jIcon from "../../../icons/techs/Neo4jIcon"
import PostgreSQLIcon from "../../../icons/techs/PostgreSQLIcon"
import RedisIcon from "../../../icons/techs/RedisIcon"
import SkillCatHead from "../SkillCatHead"
import SkillSnippet from "../SkillSnippet"
import SkillSnippetsWrapper from "../SkillSnippetsWrapper"

function SkillCat_Databases() {
  return (
    <div className="cat-databases w-96">
      <SkillCatHead catName="Databases.">
        <span className="absolute -top-4 -right-3 font-bold text-bgray-500">
          Query Langs.
        </span>
        <span className="absolute -top-7 -right-6 font-bold text-bgray-500 text-xs">
          Message Queues.
        </span>
      </SkillCatHead>
      <SkillSnippetsWrapper>
        {[
          {
            skillName: "PostgreSQL",
            skillIcon: () => <PostgreSQLIcon className="w-4.5" />,
          },
          {
            skillName: "Neo4j",
            skillIcon: () => <Neo4jIcon className="w-7" />,
          },
          {
            skillName: "Redis (PubSub, Stream, Queue)",
            skillIcon: () => <RedisIcon className="w-5" />,
          },
          {
            skillName: "SQL",
          },
          {
            skillName: "CypherQL",
          },
        ].map(({ skillName, skillIcon }, index) => (
          <SkillSnippet
            key={`skill-${index}-cat-databases`}
            skillName={skillName}
            skillIcon={skillIcon}
            index={index}
          />
        ))}
      </SkillSnippetsWrapper>
    </div>
  )
}

export default SkillCat_Databases
