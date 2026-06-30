'use client'

const works = [
  {
    id: 1,
    title: 'Mountain Landscape',
    medium: 'Oil',
    image: 'https://via.placeholder.com/300x300?text=Oil+Painting',
    description: 'Serene mountain vista',
  },
  {
    id: 2,
    title: 'Portrait Study',
    medium: 'Drawing',
    image: 'https://via.placeholder.com/300x300?text=Drawing',
    description: 'Detailed portrait work',
  },
  {
    id: 3,
    title: 'Floral Arrangement',
    medium: 'Watercolour',
    image: 'https://via.placeholder.com/300x300?text=Watercolour',
    description: 'Delicate flower composition',
  },
  {
    id: 4,
    title: 'Abstract Composition',
    medium: 'Acrylic',
    image: 'https://via.placeholder.com/300x300?text=Acrylic',
    description: 'Modern abstract art',
  },
  {
    id: 5,
    title: 'Digital Illustration',
    medium: 'Digital',
    image: 'https://via.placeholder.com/300x300?text=Digital+Art',
    description: 'Contemporary digital work',
  },
  {
    id: 6,
    title: 'Sunset Beach',
    medium: 'Oil',
    image: 'https://via.placeholder.com/300x300?text=Sunset',
    description: 'Golden hour seascape',
  },
]

export default function FeaturedWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-primary">{work.title}</h3>
                  <span className="bg-accent text-white px-3 py-1 rounded text-sm">{work.medium}</span>
                </div>
                <p className="text-gray-600 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
