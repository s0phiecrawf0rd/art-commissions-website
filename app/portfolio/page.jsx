'use client'

import { useState } from 'react'
import PortfolioGrid from '@/components/PortfolioGrid'

const mediums = ['All', 'Oil', 'Acrylic', 'Watercolour', 'Digital', 'Drawing']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">My Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my collection of paintings and drawings across various mediums and styles
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {mediums.map((medium) => (
            <button
              key={medium}
              onClick={() => setActiveFilter(medium)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeFilter === medium
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {medium}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <PortfolioGrid filter={activeFilter} />
      </div>
    </div>
  )
}
