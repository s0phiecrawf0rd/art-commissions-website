'use client'

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We discuss your vision, ideas, and preferences',
    },
    {
      number: 2,
      title: 'Design & Planning',
      description: 'I create sketches and discuss composition with you',
    },
    {
      number: 3,
      title: 'Creation',
      description: 'I bring your artwork to life with careful attention to detail',
    },
    {
      number: 4,
      title: 'Finalization',
      description: 'Final touches and delivery of your complete artwork',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">The Commission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
