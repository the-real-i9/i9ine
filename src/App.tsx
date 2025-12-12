import { useEffect } from "react"
import AboutSection from "./components/sections/AboutSection"
import HeroSection from "./components/sections/HeroSection"
import ProjectsSection from "./components/sections/projects/ProjectsSection"
import SkillsSection from "./components/sections/skills/SkillsSection"
import VideosSection from "./components/sections/videos/VideosSection"
import WebsiteFooter from "./components/WebsiteFooter"
import WebsiteHeader from "./components/WebsiteHeader"

function App() {
  useEffect(() => {
    let lastScrollY = window.scrollY

    const evHandler = () => {
      const current = window.scrollY

      const header = document.querySelector("header.website-header")
      const footer = document.querySelector("footer.website-footer")

      if (current > lastScrollY) {
        // Scrolling down
        header?.classList.remove("top-4")
        header?.classList.add("-top-16")

        footer?.classList.add("bottom-4")
        footer?.classList.remove("-bottom-10")
      } else {
        // Scrolling up
        header?.classList.add("top-4")
        header?.classList.remove("-top-16")

        footer?.classList.remove("bottom-4")
        footer?.classList.add("-bottom-10")
      }

      lastScrollY = current
    }

    window.addEventListener("scroll", evHandler)

    return () => {
      window.removeEventListener("scroll", evHandler)
    }
  }, [])

  return (
    <>
      <WebsiteHeader />
      <main id="home">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <VideosSection />
      </main>
      <WebsiteFooter />
    </>
  )
}

export default App
