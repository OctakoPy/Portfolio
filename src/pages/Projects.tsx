import { Headphones, Github, Box } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
          <p className="text-xl text-gray-400">Showcasing my latest work and experiments</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-futuristic-accent/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-futuristic-accent/10 rounded-full">
                      <Headphones className="w-6 h-6 text-futuristic-accent" />
                    </div>
                    <CardTitle className="text-2xl text-futuristic-light">Audiobook Player</CardTitle>
                  </div>
                  <a 
                    href="https://github.com/OctakoPy/Audiobook-Player" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-futuristic-accent hover:text-futuristic-light transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source</span>
                  </a>
                </div>
                <CardDescription className="text-gray-400 mt-4">
                  A comprehensive audiobook player application built with modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  A feature-rich audiobook player that provides an immersive listening experience. 
                  The application includes essential features for audiobook enthusiasts and demonstrates 
                  strong software engineering principles.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-futuristic-accent">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-futuristic-accent rounded-full" />
                      <span>Audio playback controls</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-futuristic-accent rounded-full" />
                      <span>Library management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-futuristic-accent rounded-full" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-futuristic-accent rounded-full" />
                      <span>Bookmarking system</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-futuristic-accent/20">
              <div className="flex flex-col items-center justify-center space-y-6">
                <Box className="w-16 h-16 text-futuristic-accent animate-float" />
                <p className="text-lg text-center">
                  More projects coming soon! Check back later to see what else I'm building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;