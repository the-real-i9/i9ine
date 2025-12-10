import BrushCog from "./icons/BrushCog"

function SectionHeader({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  return (
    <header className={`flex justify-center pl-[30px] mb-18 ${className}`}>
      <div className="relative">
        <h2 className="font-bold text-[40px]">
          {title}
          <span className="text-transparent bg-linear-to-r bg-clip-text from-byellow to-60% to-bred">
            .
          </span>
        </h2>
        <BrushCog className="absolute -top-[19px] -left-[30px] -z-1" />
        <div className="-z-1 absolute -bottom-0.5 -left-px bg-bgray-900 w-[100px] h-[50px]"></div>
      </div>
    </header>
  )
}

export default SectionHeader
