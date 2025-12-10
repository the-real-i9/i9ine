import SectionHeader from "../../SectionHeader"
import VideoCard from "./VideoCard"
import dummyImg from "/bg-video.png"

function VideosSection() {
  return (
    <section className="w-full pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Videos" />

        <div className="video-cards flex justify-between flex-wrap space-y-4">
          <VideoCard
            thumbnail={dummyImg}
            title="Implementing Anaytics for a Social Media Platform"
            description="In this video we&#x2019;re going to be building an analytics service for a social media platform. Enjoy!"
            ytURL="https://youtube.com"
          />
          <VideoCard
            thumbnail={dummyImg}
            title="Implementing Anaytics for a Social Media Platform"
            description="In this video we&#x2019;re going to be building an analytics service for a social media platform. Enjoy!"
            ytURL="https://youtube.com"
          />
        </div>
      </div>
    </section>
  )
}

export default VideosSection
