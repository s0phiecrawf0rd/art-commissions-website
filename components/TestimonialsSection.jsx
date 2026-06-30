'use client'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The quality of work is exceptional. My portrait looks absolutely stunning!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Professional, responsive, and incredibly talented. Highly recommended!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Williams',
      text: 'My custom oil painting exceeded all expectations. Perfect attention to detail.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg shadow p-6">
              <div className="mb-4">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
