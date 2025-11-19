import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/0806350a-b65c-465d-a1e3-e8565d527fc6-removebg-preview.png"
              alt="Archetype Dynamics Logo"
              className="h-10 w-10"
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              Archetype Dynamics
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Services", href: "#services" },
              { name: "Process", href: "#process" },
              { name: "Team", href: "#team" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled
                    ? "text-slate-600 dark:text-gray-300"
                    : "text-slate-700 dark:text-gray-300"
                }`}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors hover:bg-orange-500/10 ${
                isScrolled
                  ? "text-slate-600 dark:text-gray-300"
                  : "text-slate-700 dark:text-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white/10 text-white hover:bg-slate-800 dark:hover:bg-white/20 text-sm font-medium transition-all border border-transparent dark:border-white/10">
              Book Call
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-slate-900 dark:text-white p-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-slate-900 dark:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-white/10 absolute left-0 right-0 p-4 shadow-xl">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "Team", href: "#team" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-gray-300 font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
