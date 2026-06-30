'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 text-amber-900 shadow-lg border-b-4 border-amber-800">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo with book/paint theme */}
          <Link href="/" className="text-2xl font-bold text-amber-900 hover:text-orange-600 transition-colors">
            <span className="inline-block mr-2">🎨</span>
            <span className="text-amber-800">ART</span>
            <span className="text-orange-600"> & </span>
            <span className="text-amber-800">BOOKS</span>
            <span className="inline-block ml-2">📚</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-orange-600 transition-colors hover:underline decoration-orange-600 decoration-2 underline-offset-4">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-orange-600 transition-colors hover:underline decoration-orange-600 decoration-2 underline-offset-4">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-orange-600 transition-colors hover:underline decoration-orange-600 decoration-2 underline-offset-4">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors hover:underline decoration-orange-600 decoration-2 underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="bg-amber-800 text-yellow-50 px-4 py-2 rounded hover:bg-orange-600 hover:shadow-lg transition-all">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-amber-800 hover:text-orange-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 bg-white bg-opacity-90 p-4 rounded-lg">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-orange-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-orange-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-amber-800 text-yellow-50 px-4 py-2 rounded hover:bg-orange-600 transition-colors inline-block">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
