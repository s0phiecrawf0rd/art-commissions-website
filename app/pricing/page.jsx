'use client'

import PricingCard from '@/components/PricingCard'

const pricingPlans = [
  {
    id: 1,
    name: 'Sketches & Drawings',
    basePrice: 150,
    description: 'Perfect for getting started with your commission',
    features: [
      'Pencil or ink drawings',
      'Up to 2 revisions',
      'A4 or A3 size',
      'Digital or physical',
      '2-week turnaround',
    ],
  },
  {
    id: 2,
    name: 'Small Paintings',
    basePrice: 400,
    description: 'Ideal for personal collections',
    features: [
      'Oil, acrylic, or watercolour',
      'Up to 8x10 inches',
      'Up to 3 revisions',
      'Your choice of medium',
      '3-week turnaround',
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'Medium Paintings',
    basePrice: 800,
    description: 'Great for statement pieces',
    features: [
      'Oil, acrylic, or watercolour',
      'Up to 16x20 inches',
      'Up to 4 revisions',
      'Full color consultation',
      '4-week turnaround',
    ],
  },
  {
    id: 4,
    name: 'Large/Custom',
    basePrice: 1500,
    description: 'Custom pricing for unique projects',
    features: [
      'Any size and medium',
      'Unlimited revisions',
      'Full collaboration process',
      'Premium materials',
      'Custom timeline',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Pricing Plans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all types of art commissions. All prices are starting points - custom work quoted individually.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What's Included in Every Commission?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>Initial consultation and design discussion</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>Revision rounds (varies by plan)</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>Progress updates throughout creation</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>High-quality materials and techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>Certificate of authenticity (for paintings)</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">✓</span>
              <span>Professional photography/documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
