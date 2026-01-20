import SectionHeader from "../../SectionHeader"
import VideoCard from "./VideoCard"
import dummyImg from "/bg-image.png"

function VideosSection() {
  return (
    <section id="videos" className="w-full pt-24 pb-19">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Videos" />

        <div className="video-cards flex justify-between flex-wrap space-y-4">
          <VideoCard
            thumbnail={dummyImg}
            title="Coming Soon: A video showing the implementation of a feature."
            description="A video showing the implementation of one of the features in my projects. Enjoy watching!"
            ytURL="#"
          />
          <VideoCard
            thumbnail={dummyImg}
            title="Coming Soon: A video showing the implementation of a feature."
            description="A video showing the implementation of one of the features in my projects. Hope you'll like it!"
            ytURL="#"
          />
        </div>
      </div>
    </section>
  )
}

export default VideosSection
