import { Box } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-futuristic-dark to-black text-futuristic-light pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-400">Watch this space for upcoming projects!</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-futuristic-accent/20">
            <div className="flex flex-col items-center justify-center space-y-6">
              <Box className="w-16 h-16 text-futuristic-accent animate-float" />
              <p className="text-lg text-center">
                Projects are currently in development. Check back soon to see what I'm building!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;