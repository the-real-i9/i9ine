import GitHubIcon from "./icons/socials/GitHubIcon"
import LinkedinIcon from "./icons/socials/LinkedinIcon"
import XIcon from "./icons/socials/XIcon"

function WebsiteFooter() {
  return (
    <footer className="website-footer fixed -bottom-10 w-full z-2 transition-all duration-500">
      <div className="w-fit mx-auto flex items-center bg-white px-4 py-2 rounded-full shadow-lg shadow-black text-black text-xs space-x-2">
        <span>
          Designed and developed by <strong>i9ine ♥️</strong>
        </span>
        <span>|</span>
        <div className="flex items-center space-x-0.5">
          <a href="https://github.com/the-real-i9" className="group">
            <GitHubIcon className="w-5 fill-black group-hover:fill-bgray-300" />
          </a>
          <a href="https://linkedin.com" className="group">
            <LinkedinIcon className="w-5 fill-black group-hover:fill-bgray-300" />
          </a>
          <a href="https://x.com" className="group">
            <XIcon className="w-5 fill-black group-hover:fill-bgray-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default WebsiteFooter
