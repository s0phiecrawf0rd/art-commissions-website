'use client'

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import FeaturedWorks from '@/components/FeaturedWorks'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorks />
      <ProcessSection />
      <TestimonialsSection />
      
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Commission Your Art?</h2>
          <p className="text-lg mb-8">Let's create something beautiful together</p>
          <Link href="/contact" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}
