import { Atom, CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";

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
              I'm a passionate developer on a journey to create amazing web experiences. 
              Currently exploring new technologies and building my portfolio. 
              I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Preview Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-futuristic-accent/20 animate-glow"
              >
                <div className="h-40 bg-futuristic-accent/10 rounded-md mb-4" />
                <div className="h-4 w-3/4 bg-futuristic-accent/10 rounded mb-2" />
                <div className="h-4 w-1/2 bg-futuristic-accent/10 rounded" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;