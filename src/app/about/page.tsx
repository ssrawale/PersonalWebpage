export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">About Me</h1>
          <p className="text-lg text-text-secondary">
            Passionate about the intersection of geography, data, and technology
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-dark-charcoal border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Background</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I'm a geospatial professional with a deep fascination for how spatial data can reveal 
              hidden patterns and drive informed decision-making. My journey began with a degree in 
              Geography and Geographic Information Systems from Ohio State University, where I 
              discovered the power of combining cartographic principles with modern data science.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Over the years, I've specialized in geodatabase architecture, custom geovisualization 
              development, and spatial analysis workflows. Whether it's designing efficient PostGIS 
              schemas or creating interactive web maps with Mapbox, I'm driven by the challenge of 
              making complex spatial data accessible and actionable.
            </p>
          </div>

          <div className="bg-dark-charcoal border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Technical Expertise</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-3">GIS Platforms</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• ArcGIS Pro / Enterprise</li>
                  <li>• QGIS</li>
                  <li>• PostGIS / PostgreSQL</li>
                  <li>• FME (Feature Manipulation Engine)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-primary mb-3">Development</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Python (GeoPandas, ArcPy)</li>
                  <li>• JavaScript (Mapbox, Leaflet)</li>
                  <li>• SQL / Spatial Databases</li>
                  <li>• React / Next.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-charcoal border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Beyond Work</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              When I'm not analyzing spatial data, you'll find me exploring Columbus's thriving 
              coffee scene (hence the coffee map project!), contributing to open-source GIS projects, 
              or experimenting with new cartographic design techniques.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I'm particularly interested in the democratization of geospatial technology and believe 
              in sharing knowledge through writing, workshops, and community engagement. If you're 
              working on an interesting spatial data challenge or want to collaborate on a mapping 
              project, I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}