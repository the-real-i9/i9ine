import SectionHeader from "../../SectionHeader"

function VideosSection() {
  return (
    <section className="w-full pt-24 pb-20">
      <div className="w-full max-w-7xl mx-auto px-10">
        <SectionHeader title="Videos" />

        <div className="video-cards flex"></div>
      </div>
    </section>
  )
}

export default VideosSection
