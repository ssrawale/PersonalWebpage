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
              <h1 className="text-5xl font-bold mb-4 text-text-primary">Hi, I'm Shreya!</h1>
              <p className="text-2xl text-accent-blue font-medium mb-6">
                Technical Program Manager
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
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
              {/*<h2 className="text-2xl font-semibold mb-6 text-accent-blue">Skills</h2>*/}
              <div className="grid grid-cols-3 gap-6">
                <div className="p-6 rounded-md bg-zinc-100">
                  <h3 className="text-lg font-medium text-center mb-3">Languages and Software</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Java</li>
                    <li>• Python</li>
                    <li>• SQL</li>
                    <li>• R</li>
                    <li>• HTML/CSS</li>
                  </ul>
                </div>
                <div className="p-6 rounded-md bg-zinc-100">
                  <h3 className="text-lg font-medium text-ccenter mb-3">Developer Tools</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• ArcGIS</li>
                    <li>• Postgres</li>
                    <li>• Microsoft Access</li>
                  </ul>
                </div>
                <div className="p-6 rounded-md bg-zinc-100">
                  <h3 className="text-lg font-medium text-center mb-3">Non-technical Skills</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Azure Fundamentals Certified (AZ-900)</li>
                    <li>• Fluent in Spanish, Hindi, Marathi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}