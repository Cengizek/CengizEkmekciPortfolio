import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Cengizek" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/cengiz-e-518436319" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact Info</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>📧 ekmekcicengiz64@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Cengiz Ekmekçi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
