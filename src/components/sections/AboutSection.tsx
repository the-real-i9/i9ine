import { useState } from "react"
import BrushPicFrame from "../icons/BrushPicFrame"
import SectionHeader from "../SectionHeader"

function AboutSection() {
  const [readMore, setReadMore] = useState(false)

  return (
    <section id="about" className="w-full pt-24 pb-14">
      <div className="w-full max-w-7xl mx-auto px-5">
        <SectionHeader title="About Me" />

        <div className="flex mx-auto w-fit space-x-12">
          <div className="relative w-96 h-96 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-[url(/official-me.jpg)] bg-no-repeat bg-position-[-50px_-5px] bg-size-[450px] relative">
              <div className="bg-linear-to-br from-byellow to-bred opacity-30 absolute inset-0 rounded-full" />
            </div>
            <BrushPicFrame className="absolute w-full h-full" />
          </div>
          <div className="text-sm max-w-[600px]">
            <p>
              I'm <strong>Samuel &#x201c;i9ine&#x201d; Oluwarinola</strong>.
            </p>
            <br />
            <p>
              A software engineer who enjoys building backends that solve
              real-world problems and serve real-world purposes.
            </p>
            <br />
            <p>
              Backend Engineer focused on building high-performance APIs,
              services, and systems involving design, domain logic, and
              algorithmic problem-solving to address real-world problems while
              meeting both user and business demands.
            </p>
            <br />
            <p>
              Experienced in building complex APIs, real-time communication
              systems, and data-intensive backend services using Go and Node.js.
              Skilled at translating the real-world into efficient data models,
              optimizing performance, and designing clean paths through
              technical complexity.
            </p>
            <br />
            <p>
              I&#x2019;ve designed and implemented non-trivial backend projects,
              including a feature-rich social media API, a full-fledged
              real-time chat system, and a remote file system built with Neo4j
              and GCS, similar in structure to Instagram, WhatsApp, and Google
              Drive respectively, all constantly undergoing feature improvements
              and performance tuning. As a hobby, I also explore system
              foundations and internals with C{readMore ? "." : "..."}
            </p>
            <br />
            {readMore && (
              <>
                <p>
                  I enjoy projects that allow me to apply generic or
                  domain-specific algorithms to solve real-world problems,
                  challenge me to think about how to design or re-design a
                  system to meet specific user or business demands, and
                  sometimes allow me to explore and understand real-world
                  domains outside of my own field.
                </p>
                <br />
                <p>
                  If you&#x2019;re building something and want to work with
                  someone who thinks deeply about structure, behavior, and
                  implementation, I&#x2019;m open to collaborations and
                  conversations.
                </p>
                <br />
              </>
            )}
            <button
              onClick={() => setReadMore((v) => !v)}
              className="font-bold text-xs bg-linear-to-r from-byellow from-70% to-bred text-transparent bg-clip-text"
            >
              {!readMore ? (
                <span>Read more...</span>
              ) : (
                <span>Read less&lt;&lt;&lt;</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
