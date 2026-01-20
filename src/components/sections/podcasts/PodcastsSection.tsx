import SectionHeader from "../../SectionHeader"
import PodcastCard from "./PodcastCard"
import dummyImg from "/bg-image.png"

function PodcastsSection() {
  return (
    <section id="podcasts" className="w-full pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Podcasts" />

        <div className="podcast-cards flex justify-between flex-wrap space-y-4">
          <PodcastCard
            thumbnail={dummyImg}
            title="Coming Soon: A podcast talking about system foundations."
            description="A podcast talking about systems foundations for the Backend Software Engineer. Enjoy listening!"
            ytURL="#"
          />
          <PodcastCard
            thumbnail={dummyImg}
            title="Coming Soon: A podcast talking about system foundations."
            description="A podcast talking about systems foundations for the Backend Software Engineer. Enjoy listening!"
            ytURL="#"
          />
        </div>
      </div>
    </section>
  )
}

export default PodcastsSection
