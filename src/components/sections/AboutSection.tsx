import { useState } from "react"
import BrushPicFrame from "../icons/BrushPicFrame"
import SectionHeader from "../SectionHeader"

function AboutSection() {
  const [readMore, setReadMore] = useState(false)

  return (
    <section id="about" className="w-full pt-24 pb-10">
      <div className="w-full max-w-7xl mx-auto px-5">
        <SectionHeader title="About Me" className="mb-20" />

        <div className="flex mx-auto w-fit space-x-12">
          <div className="relative w-96 h-96 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-[url(/official-me.jpg)] bg-no-repeat bg-position-[-50px_-5px] bg-size-[450px] relative">
              <div className="bg-linear-to-br from-byellow to-bred opacity-30 absolute inset-0 rounded-full" />
            </div>
            <BrushPicFrame className="absolute w-full h-full" />
          </div>
          <div className="text-sm max-w-[600px]">
            <p>
              I'm <strong>Samuel "i9ine" Oluwarinola</strong>.
            </p>
            <br />
            <p>
              A software engineer who enjoys building backend systems that solve
              real-world problems and serve real-world purposes. Most of my work
              revolves around backend architecture design, the problem-domain
              algorithms, data flow, and the kind of engineering that rewards
              clarity and careful thinking. I work with Go and
              JavaScript/Node.js, and I spend a lot of time optimizing APIs for
              performance, scalability, edge cases, and user experience;
              ensuring robustness under real-world constraints and helping
              businesses generate measurable value.
            </p>
            <br />
            <p>
              I&#x2019;ve designed and implemented non-trivial backend projects,
              including a feature-rich social media API, a real-time chat system
              similar in structure to WhatsApp or Discord, and a virtual file
              system built with Neo4j and GCS; all constantly undergoing feature
              improvements, and performance tuning. As a hobby, I also explore
              the foundations and internals with C.
            </p>
            <br />
            <p>
              I enjoy projects that allow me to apply generic or domain-specific
              algorithms to solve real-world problems, challenge me to think
              about how to design or re-design a solution to meet specific user
              or business demands, and sometimes allow me explore and understand
              real-world domains outside of my own field{readMore ? "." : "..."}
            </p>
            <br />
            {readMore && (
              <>
                <p>
                  My long-term direction is independent engineering and
                  consulting. I like sitting with people, understanding the
                  problems they&#x2019;re facing, and designing the software
                  paths that can solve them. Whether it&#x2019;s a backend
                  architecture, a performance bottleneck, a data-modeling
                  challenge, or a system that needs to be built from the ground
                  up, I&#x2019;m interested in the work that turns ideas into
                  functioning systems.
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
              className="block w-fit font-bold text-xs bg-linear-to-r from-byellow from-70% to-bred text-transparent bg-clip-text"
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
