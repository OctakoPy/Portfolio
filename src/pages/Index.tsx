import { Atom, CircuitBoard, Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-futuristic-dark to-black text-futuristic-light pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My
            <span className="text-futuristic-accent"> Digital Space</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Frontend Developer | Creative Thinker | Tech Enthusiast
          </p>
          <div className="animate-float">
            <Atom className="w-16 h-16 mx-auto text-futuristic-accent" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <CircuitBoard className="w-8 h-8 mr-2 text-futuristic-accent" />
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-futuristic-accent/20">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer focused on creating innovative solutions and meaningful user experiences. 
              My journey in software development has led me to explore various technologies and build practical applications 
              like my Audiobook Player project. I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Project</h2>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-futuristic-accent/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-futuristic-accent/10 rounded-full">
                <Headphones className="w-12 h-12 text-futuristic-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Audiobook Player</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive audiobook player application with features like progress tracking and library management.
                </p>
                <Link 
                  to="/projects" 
                  className="inline-flex items-center space-x-2 text-futuristic-accent hover:text-futuristic-light transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;