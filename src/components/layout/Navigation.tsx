import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              🌿 AyurWellness
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/register"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/register")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Register
            </Link>
            <Link
              to="/quiz"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/quiz")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Prakriti Quiz
            </Link>
            <Link
              to="/symptoms"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/symptoms")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Symptoms
            </Link>
            <Link
              to="/herbs"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/herbs")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Herbs
            </Link>
            <Link
              to="/marks"
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/marks")
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Marks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;