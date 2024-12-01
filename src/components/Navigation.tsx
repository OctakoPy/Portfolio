import { Link, useLocation } from "react-router-dom";
import { Rocket, CircuitBoard, Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-futuristic-dark/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-futuristic-accent hover:text-futuristic-light transition-colors">
            <Rocket className="w-6 h-6" />
            <span className="font-bold">Portfolio</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 hover:text-futuristic-accent transition-colors ${
                isActive("/") ? "text-futuristic-accent" : "text-futuristic-light"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/projects" 
              className={`flex items-center space-x-1 hover:text-futuristic-accent transition-colors ${
                isActive("/projects") ? "text-futuristic-accent" : "text-futuristic-light"
              }`}
            >
              <CircuitBoard className="w-4 h-4" />
              <span>Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;