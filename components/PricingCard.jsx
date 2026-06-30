'use client'

export default function PricingCard({ plan }) {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
      plan.featured ? 'ring-2 ring-accent bg-white' : 'bg-white'
    }`}>
      {plan.featured && (
        <div className="bg-accent text-white text-center py-2 font-bold">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-primary">${plan.basePrice}</span>
          <span className="text-gray-600 ml-2">starting at</span>
        </div>
        <button className={`w-full py-3 rounded font-semibold transition-colors mb-6 ${
          plan.featured
            ? 'bg-primary text-white hover:bg-secondary'
            : 'bg-gray-100 text-primary hover:bg-primary hover:text-white'
        }`}>
          Select Plan
        </button>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-accent mr-2 font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
