import Hero from "../components/Hero";
import Skills from "../components/Skills";

function Index() {
  return (
    <div>
      <Hero />
      <Skills />
      
      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      Live Demo
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;