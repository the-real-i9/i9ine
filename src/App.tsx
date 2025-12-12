import AboutSection from "./components/sections/AboutSection"
import HeroSection from "./components/sections/HeroSection"
import ProjectsSection from "./components/sections/projects/ProjectsSection"
import SkillsSection from "./components/sections/skills/SkillsSection"
import VideosSection from "./components/sections/videos/VideosSection"
import WebsiteHeader from "./components/WebsiteHeader"

function App() {
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
    </>
  )
}

export default App
