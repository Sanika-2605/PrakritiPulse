import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/register", label: "Register", icon: "👤" },
    { path: "/quiz", label: "Prakriti Quiz", icon: "🧘" },
    { path: "/symptoms", label: "Symptoms", icon: "🔍" },
    { path: "/herbs", label: "Herbs", icon: "🌿" },
    { path: "/marks", label: "Marks", icon: "📊" },
  ];

  return (
    <nav className="backdrop-blur-elegant border-b border-white/10 shadow-xl sticky top-0 z-50 bg-gradient-animated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group hover-scale">
            <div className="text-2xl group-hover:rotate-12 transition-transform duration-300 float-animation">🌿</div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                AyurWellness
              </span>
              <div className="text-xs text-white/70 hidden sm:block">Ancient Wisdom • Modern Wellness</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-lift relative group ${
                  isActive(item.path)
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full transition-transform duration-300 ${
                  isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover-scale"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className="py-4 space-y-2 border-t border-white/10 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover-lift fade-in ${
                  isActive(item.path)
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <span className="ml-auto text-accent pulse-glow">●</span>
                )}
              </Link>
            ))}
            
            {/* Mobile Menu Footer */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="flex items-center justify-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1 bounce-gentle">
                  <span className="text-primary">🌱</span>
                  Natural Healing
                </span>
                <span className="flex items-center gap-1 bounce-gentle" style={{animationDelay: '0.5s'}}>
                  <span className="text-accent">✨</span>
                  Ancient Wisdom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;