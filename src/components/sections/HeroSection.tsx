import { useState } from "react"

import PauseIcon from "../icons/PauseIcon"
import PlayIcon from "../icons/PlayIcon"

function HeroSection() {
  const [bgVideoPlaying, setBgVideoPlaying] = useState(true)

  return (
    <section className="w-full relative h-screen max-w-[1600px] max-h-[900px] mx-auto bg-[url(/bg-video.png)] bg-no-repeat bg-cover bg-center">
      <div className="overlay absolute inset-0 bg-bgray-900/90" />
      <div className="hero relative z-0 w-full px-12 mx-auto h-full flex flex-col items-center justify-center">
        <div className="text-8xl">
          <span className="font-casual font-light">I&#x2019;m</span>
          <span className=""> </span>
          <span className="font-extrabold bg-clip-text bg-linear-to-r from-byellow to-bred text-transparent">
            i9ine
          </span>
        </div>
        <div className="text-5xl">
          <span className="font-bold">Backend </span>
          <span className="font-thin">Software Engineer</span>
        </div>
        <p className="text-center mt-4 text-bgray-300">
          I build scalable, secure backend APIs, services, and systems
          <br />
          that solve real-world problems while generating measurable business
          value.
        </p>

        <div className="space-x-6 mt-11 mb-8.5">
          <button className="getintouch font-bold w-[225px] h-[60px] bg-bgray-700 rounded-full shadow-[0px_4px_4px] shadow-black/25">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-byellow to-bred">
              Get in touch.
            </span>
          </button>
          <button className="downloadcv font-bold w-[225px] h-[60px] bg-bgray-900/60 bg-[url(/gbord.svg)] bg-no-repeat bg-contain bg-center rounded-full">
            Download CV
          </button>
        </div>

        <div className="absolute bottom-9 self-start">
          <div className="bg-bgray-900/20 rounded-full flex items-center space-x-2 p-1 pr-6">
            <button
              onClick={() => setBgVideoPlaying((v) => !v)}
              className="bg-bgray-700 bg-[url(/ppbord.svg)] bg-no-repeat bg-contain bg-center rounded-full w-[30px] h-[30px]"
            >
              {bgVideoPlaying ? (
                <PauseIcon className="fill-white w-3 aspect-square mx-auto" />
              ) : (
                <PlayIcon className="fill-white w-3 aspect-square mx-auto" />
              )}
            </button>
            <div className="text-sm text-bgray-200">
              <strong>Now playing:</strong> Implementing a reply message
              feature.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
