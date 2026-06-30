'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">ART COMMISSIONS</h3>
            <p className="text-gray-300">Custom paintings and drawings in oils, acrylics, watercolours, and digital media.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Me</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="mailto:contact@yourart.com" className="hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">📧 contact@yourart.com</p>
            <p className="text-gray-300">Ready to commission your art?</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Art Commissions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
