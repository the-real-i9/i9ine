import VectCog from "../../icons/VectCog"

function SkillCatHead({
  catName,
  children,
}: {
  catName: string
  children: React.ReactNode
}) {
  return (
    <div className="relative w-fit">
      <h3 className="font-bold text-2xl text-bgray-500">{catName}</h3>
      <VectCog className="absolute -top-[18px] -left-[23px] -z-1 opacity-90" />
      <div className="-z-1 absolute top-1 -left-px bg-bgray-900 w-[100px] h-[22px]" />
      {children}
    </div>
  )
}

export default SkillCatHead
