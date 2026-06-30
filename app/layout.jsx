import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Art Commissions - Professional Paintings & Drawings',
  description: 'Custom art commissions in oils, acrylics, watercolours, and digital media. Professional artist specializing in bespoke artwork.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
