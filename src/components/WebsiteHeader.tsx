import { useState } from "react"
import Logoi9 from "./icons/Logoi9"

function WebsiteHeader() {
  const [activeRef, setActiveRef] = useState("#home")

  return (
    <header className="website-header fixed top-4 w-full z-2 transition-all duration-500">
      <div className="w-fit mx-auto flex items-center bg-white p-1.5 rounded-full shadow-lg shadow-black">
        <div className="w-10 pl-0.5 aspect-square rounded-full bg-bgray-900 flex justify-center items-center">
          <Logoi9 />
        </div>

        <nav className="space-x-4 mx-6 mr-7">
          {[
            { href: "#home", name: "Home" },
            { href: "#about", name: "About" },
            { href: "#projects", name: "Projects" },
            { href: "#skills", name: "Skills" },
            { href: "#videos", name: "Videos" },
            { href: "#podcasts", name: "Podcasts" },
          ].map(({ href, name }) => (
            <a
              key={`nav-${href}`}
              href={href}
              className={`text-sm hover:text-bgray-300 ${
                href === activeRef ? "text-bgray-300" : "text-black"
              }`}
              onClick={() => setActiveRef(href)}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default WebsiteHeader
