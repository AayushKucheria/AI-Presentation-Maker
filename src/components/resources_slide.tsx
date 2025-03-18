import { motion } from 'framer-motion';

export default function ResourcesSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-rose-600">Additional Resources</h2>
        
        <div className="space-y-6">
          <div className="bg-rose-50 p-6 rounded-lg border border-rose-100">
            <h3 className="text-lg font-semibold mb-3 text-rose-700">Helpful Tools & Resources</h3>
            <p className="text-gray-700">
              To get the most out of this template, here are some additional resources and tools that can help enhance your presentation creation process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-blue-600 px-5 py-3">
                <h3 className="text-lg font-medium text-white">AI Tools</h3>
              </div>
              <div className="p-5 space-y-3">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Claude in Cursor</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Use Cursor's Agent Mode with Claude for a seamless AI collaboration experience when creating your slides.
                  </p>
                  <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    cursor.sh
                  </a>
                </div>
                
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Perplexity AI</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Helpful for research and finding relevant information to enhance your presentation content.
                  </p>
                  <a href="https://perplexity.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    perplexity.ai
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">DALL-E or Midjourney</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Generate custom images and visuals for your presentation slides.
                  </p>
                  <div className="flex gap-3 mt-1">
                    <a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline inline-block">
                      DALL-E
                    </a>
                    <a href="https://midjourney.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline inline-block">
                      Midjourney
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-purple-600 px-5 py-3">
                <h3 className="text-lg font-medium text-white">Design Resources</h3>
              </div>
              <div className="p-5 space-y-3">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Unsplash</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Free high-quality stock photos to enhance your presentation visuals.
                  </p>
                  <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    unsplash.com
                  </a>
                </div>
                
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Tailwind UI</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Component examples and templates that can be adapted for your presentation slides.
                  </p>
                  <a href="https://tailwindui.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    tailwindui.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Heroicons</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Beautiful hand-crafted SVG icons that integrate perfectly with Tailwind CSS.
                  </p>
                  <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    heroicons.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-emerald-600 px-5 py-3">
                <h3 className="text-lg font-medium text-white">Documentation</h3>
              </div>
              <div className="p-5 space-y-3">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Next.js Docs</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Official documentation for Next.js, the React framework used in this template.
                  </p>
                  <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    nextjs.org/docs
                  </a>
                </div>
                
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-medium text-gray-900">Tailwind CSS Docs</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Documentation for Tailwind CSS, the utility-first CSS framework used for styling.
                  </p>
                  <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    tailwindcss.com/docs
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">Framer Motion</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Documentation for the animation library used in this template.
                  </p>
                  <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                    framer.com/motion
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-amber-600 px-5 py-3">
                <h3 className="text-lg font-medium text-white">Presentation Tips</h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Best Practices</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Keep slides focused on one idea per slide
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Use consistent visual hierarchy and styling
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Incorporate visuals to enhance understanding
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Test your presentation on different devices
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Practice your presentation with the keyboard navigation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-4">
              Now that you have all the resources you need, you're ready to create your own AI-powered presentation!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://github.com/YOUR_USERNAME/ai-slides-template" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                GitHub Repository
              </a>
              <a 
                href="https://github.com/YOUR_USERNAME/ai-slides-template/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 