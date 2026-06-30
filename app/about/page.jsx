'use client'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">Professional artist specializing in custom commissions</p>
        </div>
      </div>

      {/* About Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">My Artistic Journey</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With a passion for capturing beauty through various mediums, I've dedicated myself to creating meaningful art that resonates with people. My journey spans years of exploring different techniques and styles.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in commissions that tell personal stories, whether through vibrant oil paintings, delicate watercolours, or detailed drawings. Each piece is crafted with care and attention to detail.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Working with clients to bring their visions to life is what I love most about being an artist. Let's create something extraordinary together.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Specializations</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-accent mb-1">Oil Paintings</h4>
                <p className="text-gray-600 text-sm">Rich colors and timeless beauty</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">Acrylic Works</h4>
                <p className="text-gray-600 text-sm">Versatile and vibrant creations</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">Watercolour</h4>
                <p className="text-gray-600 text-sm">Delicate and flowing expressions</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">Drawings</h4>
                <p className="text-gray-600 text-sm">Detailed pencil and ink work</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">Digital Art</h4>
                <p className="text-gray-600 text-sm">Modern digital illustrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
