import GitHubIcon from "../../icons/GitHubIcon"

type Props = {
  thumbnail: string
  name: string
  title: string
  description: string
  tags: string[]
  githubURL: string
}

function ProjectCard(p: Props) {
  return (
    <div className="project-card group p-5 w-[400px] bg-bgray-800 rounded-4xl hover:shadow-[0px_4px_4px] hover:shadow-black/25 hover:-translate-y-1 transition-all">
      <img
        className="project-pic w-full aspect-video rounded-2xl shadow-[0px_4px_4px] shadow-black/25"
        src={p.thumbnail}
      />
      <div className="mt-6">
        <div className="w-fit font-casual font-bold bg-linear-to-b text-transparent from-byellow to-bred bg-clip-text">
          {p.name}
        </div>
        <div className="text-xl font-bold text-bgray-300 mb-1">{p.title}</div>
        <p className="text-sm text-bgray-300">{p.description}</p>
        <div className="mt-8 mb-1 flex justify-between items-center">
          <div className="space-x-1">
            {p.tags.map((tag, i) => (
              <span
                key={`${p.name}-ptag-${i}`}
                className="bg-bgray-600 text-bgray-200 py-1.5 px-3 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            className="flex items-center space-x-1"
            href={p.githubURL}
            target="_blank"
          >
            <GitHubIcon className="fill-bgray-500 w-5 group-hover:fill-bgray-400" />
            <span className="font-casual text-bgray-400 text-xs -mb-1 group-hover:bg-linear-to-r from-byellow to-bred group-hover:text-transparent bg-clip-text">
              View on GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
