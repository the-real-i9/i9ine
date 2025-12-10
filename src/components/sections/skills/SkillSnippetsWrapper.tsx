import type React from "react"

function SkillSnippetsWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="skill-snippets mt-3 ml-0.5 space-x-1.5 space-y-2 flex flex-wrap">
      {children}
    </div>
  )
}

export default SkillSnippetsWrapper
