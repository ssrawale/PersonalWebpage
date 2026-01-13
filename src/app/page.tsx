import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Headshot and Intro Side by Side */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left Column - Headshot (takes 2 columns) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/headshot.jpg"
                alt="Shreya's Professional Headshot"
                width={384}
                height={384}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: About Content to span 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-text-primary text-center md:text-left">Hi, I'm Shreya!</h1>
              <p className="text-2xl text-text-primary font-medium mb-6 text-center md:text-left">
                Technical Program Manager
              </p>
              <p className="text-text-secondary leading-relaxed">
                Specializing in technical program management and development. Passionate about 
                uplifting women and minority groups in the STEM spaces.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Background</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                I excel in working at the intersection of business and technology by bringing together technical and non-technical fields. I have portfolio of experience in a wide array of disciplines and capacities including autonomous driving, hardware design, and cybersecurity.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Check out my Experience section to learn more!
              </p>
            </div>

            <div className="mb-8">

            <h2 className="text-2xl font-semibold mb-6 text-accent-blue">Skills</h2>
            {/* Languages and Software */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Languages and Software</h3>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Java
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Python
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  SQL
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  R
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  HTML/CSS
                </div>
              </div>
            </div>

            {/* Developer Tools */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Developer Tools</h3>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  ArcGIS
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  QGIS
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Postgres
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Microsoft Access
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Cartography
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Geovisualization
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Spatial Data Analysis
                </div>
              </div>
            </div>

            {/* Non-technical Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-text-primary mb-3">Non-technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Azure Fundamentals Certified (AZ-900)
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Spanish
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Hindi
                </div>
                <div className="px-4 py-2 bg-dark-charcoal border border-dark-border text-text-primary text-sm font-medium">
                  Marathi
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}