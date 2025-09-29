function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Computer Engineering graduate passionate about creating valuable software solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h2>
              <p className="text-gray-600 mb-6">
                I'm a Computer Engineering graduate with a strong portfolio of full-stack projects, 
                including an e-commerce platform featuring Stripe payment integration using .NET Blazor 
                and a multi-functional React barber shop website developed collaboratively.
              </p>
              
              <p className="text-gray-600 mb-6">
                I gained practical experience as an Intern Engineer, implementing core backend functionalities 
                and secure user authentication with Java Spring Boot. I'm committed to developing valuable 
                software solutions and contributing effectively within team environments.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">What I Do</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Backend development with Java Spring Boot and .NET</li>
                <li>• Full-stack web application development</li>
                <li>• Database design and management with JPA/Hibernate</li>
                <li>• Secure authentication and authorization systems</li>
                <li>• E-commerce platform development with payment integration</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl h-64 flex items-center justify-center text-white text-6xl font-bold">
              CE
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">Aydın, Türkiye</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Education:</span>
                  <span className="font-medium">Computer Science</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">University:</span>
                  <span className="font-medium">Süleyman Demirel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GPA:</span>
                  <span className="font-medium">3.46</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Languages:</span>
                  <span className="font-medium">English (B1)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience & Education</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Intern Engineer</h3>
                <span className="text-blue-600 font-medium">July 2025 - August 2025</span>
              </div>
              <p className="text-gray-700 font-medium mb-2">SMARTERA | Istanbul</p>
              <div className="text-gray-600 space-y-2">
                <p>• Developed backend functionalities for a school management site using Java Spring Boot</p>
                <p>• Implemented core features such as user authentication and CRUD operations</p>
                <p>• Designed and managed database schemas with JPA/Hibernate</p>
                <p>• Applied secure authentication and authorization mechanisms using Spring Security</p>
                <p>• Utilized Aspect-Oriented Programming (AOP) to manage cross-cutting concerns</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Science</h3>
                <span className="text-green-600 font-medium">December 2025</span>
              </div>
              <p className="text-gray-700 font-medium mb-2">Süleyman Demirel University | Isparta, Türkiye</p>
              <div className="text-gray-600 space-y-2">
                <p>• GPA: 3.46</p>
                <p>• Completed coursework in: Data Structures, Algorithms, Object-Oriented Programming, Database Management</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">English Language Proficiency Certificate</h3>
                <span className="text-purple-600 font-medium">June 2021 - January 2024</span>
              </div>
              <p className="text-gray-700 font-medium mb-2">School of Foreign Languages Organizations</p>
              <p className="text-gray-600">CEFR Level B1 - Intermediate English proficiency</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in new opportunities and exciting projects
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;