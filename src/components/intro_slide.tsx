import { motion } from 'framer-motion';

/**
 * Introduction slide: Tools, Flows & AI
 * Introduces the main concepts and sets up the presentation
 */
const IntroSlide = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-emerald-600">Welcome to AI Slides Template</h2>
        
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h3 className="text-lg font-semibold mb-3 text-emerald-700">What is AI Slides Template?</h3>
            <p className="text-gray-700 mb-4">
              This is a ready-to-use template for creating beautiful slide presentations with the assistance of AI. By combining your own content with AI-powered guidance, you can create professional presentations quickly and effortlessly.
            </p>
            <p className="text-gray-700">
              This template uses Next.js, React, and Tailwind CSS to provide a modern, responsive presentation experience that works in any web browser.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-emerald-700">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="bg-gray-50 p-4 rounded-lg flex">
                <div className="mr-4 text-emerald-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">AI-Powered Content Creation</h4>
                  <p className="text-sm text-gray-600">Use AI to help generate and refine your presentation content</p>
                </div>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg flex">
                <div className="mr-4 text-emerald-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Document-Based Workflow</h4>
                  <p className="text-sm text-gray-600">Add your content as documents and let AI structure your slides</p>
                </div>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg flex">
                <div className="mr-4 text-emerald-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Responsive Design</h4>
                  <p className="text-sm text-gray-600">Works on any device from mobile to desktop</p>
                </div>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg flex">
                <div className="mr-4 text-emerald-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">GitHub Pages Compatible</h4>
                  <p className="text-sm text-gray-600">Easy deployment to GitHub Pages for sharing</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Getting Started</h3>
            <p className="text-gray-700 mb-2">
              To get started with your own presentation:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Clone or fork this template repository</li>
              <li>Add your content to the <code className="bg-gray-100 px-1 py-0.5 rounded">docs</code> folder</li>
              <li>Use AI assistance to customize your slides</li>
              <li>Publish to GitHub Pages or your preferred hosting service</li>
            </ol>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSlide; 