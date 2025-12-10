import { useState } from "react"
import SectionHeader from "../../SectionHeader"
import ProjectCard from "./ProjectCard"
import dummyImg from "/bg-video.png"

function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="w-full pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-5">
        <SectionHeader title="Projects" />

        <div className="project-cards flex justify-between flex-wrap">
          <ProjectCard
            thumbnail={dummyImg}
            name="i9lyfe"
            title="Social Media API"
            description="A high-performance social media backend API built in Go, featuring
          user auth, posts, comments, media uploads, real-time notifications,
          and scalable architecture using PostgreSQL, Neo4j, Redis, and Docker."
            tags={["API"]}
            githubURL="https:github.com/the-real-i9/i9lyfe-server"
          />
          <ProjectCard
            thumbnail={dummyImg}
            name="i9chat"
            title="Chat App API"
            description="A high-performance social media backend API built in Go, featuring
          user auth, posts, comments, media uploads, real-time notifications,
          and scalable architecture using PostgreSQL, Neo4j, Redis, and Docker."
            tags={["API"]}
            githubURL="https:github.com/the-real-i9/i9chat-server"
          />
          <ProjectCard
            thumbnail={dummyImg}
            name="i9vfs"
            title="Virtual FS API"
            description="A high-performance social media backend API built in Go, featuring
          user auth, posts, comments, media uploads, real-time notifications,
          and scalable architecture using PostgreSQL, Neo4j, Redis, and Docker."
            tags={["API"]}
            githubURL="https:github.com/the-real-i9/i9rfs-server"
          />
        </div>

        <div className="mt-14">
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
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
