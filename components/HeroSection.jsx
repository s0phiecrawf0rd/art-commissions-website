'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Commission Your Dream Artwork</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Professional custom paintings and drawings in oils, acrylics, watercolours, and digital media
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/portfolio" className="btn-secondary bg-accent hover:bg-primary">
            View Portfolio
          </a>
          <a href="/pricing" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
            See Pricing
          </a>
        </div>
      </div>
    </section>
  )
}
