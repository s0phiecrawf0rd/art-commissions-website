'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">Let's discuss your commission idea</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-accent text-3xl mb-4">📧</div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a href="mailto:contact@yourart.com" className="text-primary hover:text-secondary">
              contact@yourart.com
            </a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-accent text-3xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2">Instagram</h3>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
              @yourinstagram
            </a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-accent text-3xl mb-4">👍</div>
            <h3 className="font-bold text-lg mb-2">Facebook</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
              Your Art Page
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Commission Inquiry</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">How long does a commission take?</h3>
                <p className="text-gray-600">Depending on the size and complexity, typically 2-4 weeks. Custom pieces may take longer.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Do you offer revisions?</h3>
                <p className="text-gray-600">Yes! Revision rounds are included based on your pricing plan.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept bank transfer, PayPal, and credit cards. A 50% deposit is required to start.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Can I request a specific style?</h3>
                <p className="text-gray-600">Absolutely! I work with clients to achieve their desired look and feel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
