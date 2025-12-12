import YouTubeIcon from "../../icons/socials/YouTubeIcon"

type Props = {
  thumbnail: string
  title: string
  description: string
  ytURL: string
}

function VideoCard(p: Props) {
  return (
    <div className="video-card group w-[590px] flex p-2 max-h-40 space-x-2 bg-bgray-800 rounded-2xl hover:shadow-[0px_4px_4px] hover:shadow-black/25 hover:-translate-y-1 transition-transform">
      <img
        className="video-pic w-64 aspect-video rounded-xl"
        src={p.thumbnail}
      />
      <div className="flex flex-col">
        <div className="text-sm font-bold text-bgray-200 mb-1 mt-1">
          {p.title}
          <span className="bg-linear-to-br from-byellow to-bred to-50% text-transparent bg-clip-text">
            ***
          </span>
        </div>
        <p className="text-xs text-bgray-200">{p.description}</p>
        <div className="mt-auto mb-2 flex justify-between items-center">
          <div className="text-bgray-200 text-xs">
            <span className="font-bold">Duration:</span> 5mins.
          </div>
          <a
            className="flex items-center space-x-1 mr-4"
            href={p.ytURL}
            target="_blank"
          >
            <YouTubeIcon className="fill-bgray-500 w-6 group-hover:fill-bgray-400" />
            <span className="font-casual text-bgray-400 text-xs -mb-0.5 group-hover:bg-linear-to-r from-byellow to-bred group-hover:text-transparent bg-clip-text">
              Watch on YouTube
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
