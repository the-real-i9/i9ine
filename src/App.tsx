import HeroSection from "./components/sections/HeroSection"
import ProjectsSection from "./components/sections/projects/ProjectsSection"
import SkillsSection from "./components/sections/skills/SkillsSection"
import VideosSection from "./components/sections/videos/VideosSection"

function App() {
  return (
    <>
      {/* <header>
        
      </header> */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <VideosSection />
      </main>
    </>
  )
}

export default App
