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
            {/* Portfolio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">CengizEkmekciPortfolio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">React + TypeScript + Tailwind ile kişisel portföy. Vercel üzerinde yayınlandı.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Vercel</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://cengiz-ekmekci-portfolio.vercel.app/" className="text-blue-600 dark:text-indigo-400 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="https://github.com/Cengizek/CengizEkmekciPortfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* YUMMY */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-rose-500 to-orange-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">YUMMY — E‑commerce (.NET Blazor)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Stripe entegrasyonlu .NET Blazor e‑ticaret uygulaması.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">.NET</span>
                  <span className="bg-fuchsia-100 text-fuchsia-800 px-2 py-1 rounded text-sm">Blazor</span>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">SQL Server</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-indigo-400 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* MANGO */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">MANGO — Food Ordering (.NET Web API)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">.NET Web API ve SQL Server ile sipariş uygulaması.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">.NET Web API</span>
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">SQL Server</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 dark:text-indigo-400 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium">GitHub</a>
                </div>
              </div>
            </div>
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