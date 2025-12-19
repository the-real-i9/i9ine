import SectionHeader from "../../SectionHeader"
import ProjectCard from "./ProjectCard"
import dummyImg from "/bg-video.png"
import i9lfethumb from "../../../assets/imgs/i9lyfe-thumb.png"

function ProjectsSection() {
  // const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="w-full pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-5">
        <SectionHeader title="Projects" />

        <div className="project-cards flex justify-between flex-wrap">
          <ProjectCard
            thumbnail={i9lfethumb}
            name="i9lyfe"
            title="Social Media API"
            description="A full-fledged social media API built in Go, featuring user auth, content sharing, content discovery and user interaction, real-time notifications, user following, user chat, and scalable architecture using PostgreSQL, Neo4j, Redis, and GCS."
            tags={["API", "Go"]}
            githubURL="https://github.com/the-real-i9/i9lyfe-server"
          />
          <ProjectCard
            thumbnail={dummyImg}
            name="i9chat"
            title="Chat App API"
            description="A full-fledged chat and messaging API built in Go, featuring user auth, direct and group messaging using text or voice, media sharing, group creation and management, media sharing, user search, and scalable architecture using Neo4j, Redis, and GCS."
            tags={["API", "Go"]}
            githubURL="https://github.com/the-real-i9/i9chat-server"
          />
          <ProjectCard
            thumbnail={dummyImg}
            name="i9rfs"
            title="Remote FS API"
            description="A remote file system API built in Node.js featuring user auth, real-time file system operations, user-private directory tree and file system access, file metadata, read/write permissions, and cloud object storage using WebSockets, Neo4j, and GCS."
            tags={["API", "Node.js"]}
            githubURL="https://github.com/the-real-i9/i9rfs-server"
          />
        </div>

        {/* <div className="mt-14">
          <button
            onClick={() => setShowMore((v) => !v)}
            className="block w-fit mx-auto font-bold text-xs bg-linear-to-r from-byellow from-70% to-bred text-transparent bg-clip-text"
          >
            {!showMore ? (
              <span>Show more...</span>
            ) : (
              <span>Show less&lt;&lt;&lt;</span>
            )}
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default ProjectsSection
