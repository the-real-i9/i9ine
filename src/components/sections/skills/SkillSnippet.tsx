type Props = {
  skillName: string
  skillIcon: (() => React.JSX.Element) | undefined
  index: number
}

function SkillSnippet({ skillName, skillIcon, index }: Props) {
  return (
    <div className="skill-snippet flex space-x-1.5 items-center bg-bgray-700 w-fit px-2 h-8 rounded-lg">
      {skillIcon?.()}
      {!skillIcon || (
        <span
          className={`w-1 h-1 rounded-full ${
            index % 2 ? "bg-bred" : "bg-byellow"
          }`}
        />
      )}
      <span className="font-medium text-xs">{skillName}</span>
    </div>
  )
}

export default SkillSnippet
