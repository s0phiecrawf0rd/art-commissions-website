'use client'

const portfolioItems = [
  { id: 1, title: 'Mountain Serenity', medium: 'Oil', filter: 'Oil', image: 'https://via.placeholder.com/400x400?text=Oil+1' },
  { id: 2, title: 'Portrait Essence', medium: 'Drawing', filter: 'Drawing', image: 'https://via.placeholder.com/400x400?text=Drawing+1' },
  { id: 3, title: 'Watercolor Dreams', medium: 'Watercolour', filter: 'Watercolour', image: 'https://via.placeholder.com/400x400?text=Watercolour+1' },
  { id: 4, title: 'Modern Abstract', medium: 'Acrylic', filter: 'Acrylic', image: 'https://via.placeholder.com/400x400?text=Acrylic+1' },
  { id: 5, title: 'Digital Innovation', medium: 'Digital', filter: 'Digital', image: 'https://via.placeholder.com/400x400?text=Digital+1' },
  { id: 6, title: 'Landscape Oil', medium: 'Oil', filter: 'Oil', image: 'https://via.placeholder.com/400x400?text=Oil+2' },
  { id: 7, title: 'Ink Drawing', medium: 'Drawing', filter: 'Drawing', image: 'https://via.placeholder.com/400x400?text=Drawing+2' },
  { id: 8, title: 'Floral Acrylic', medium: 'Acrylic', filter: 'Acrylic', image: 'https://via.placeholder.com/400x400?text=Acrylic+2' },
  { id: 9, title: 'Digital Portrait', medium: 'Digital', filter: 'Digital', image: 'https://via.placeholder.com/400x400?text=Digital+2' },
]

export default function PortfolioGrid({ filter }) {
  const filtered = filter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.filter === filter)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((item) => (
        <div key={item.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <div className="relative overflow-hidden bg-gray-200 h-64">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.medium}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
