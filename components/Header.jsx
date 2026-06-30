'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            ART COMMISSIONS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-accent px-4 py-2 rounded hover:bg-white hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="bg-accent px-4 py-2 rounded hover:bg-white hover:text-primary transition-colors inline-block">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
