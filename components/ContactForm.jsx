'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    medium: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        medium: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you! I'll get back to you soon.
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold text-primary mb-2">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-primary mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-primary mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-primary mb-2">Preferred Medium</label>
        <select
          name="medium"
          value={formData.medium}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        >
          <option value="">Select a medium</option>
          <option value="Oil">Oil</option>
          <option value="Acrylic">Acrylic</option>
          <option value="Watercolour">Watercolour</option>
          <option value="Drawing">Drawing</option>
          <option value="Digital">Digital</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-primary mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold text-primary mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full btn-primary bg-primary text-white hover:bg-secondary"
      >
        Send Commission Inquiry
      </button>
    </form>
  )
}
