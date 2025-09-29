import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.toggle('dark');
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">
            Cengiz Ekmekçi
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-indigo-400 border-b-2 border-blue-600 dark:border-indigo-400 pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="ml-4 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            Toggle {isDark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;