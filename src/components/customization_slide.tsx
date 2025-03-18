import { motion } from 'framer-motion';

export default function CustomizationSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Customization Options</h2>
        
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Making the Presentation Your Own</h3>
            <p className="text-gray-700">
              This template is fully customizable. You can adjust everything from colors and typography to layout and animations.
              Here are the key areas you can customize:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border-l-4 border-purple-400 shadow-sm">
              <h3 className="text-lg font-medium text-purple-700 mb-3">Visual Design</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Color scheme:</span> 
                    <p className="text-sm text-gray-600 mt-1">
                      Edit the color classes in the components to match your brand. Find primary colors in the 
                      <code className="bg-gray-100 px-1 py-0.5 mx-1 rounded">getSectionColor</code> function in 
                      <code className="bg-gray-100 px-1 py-0.5 mx-1 rounded">page.tsx</code>.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Typography:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Adjust font sizes, weights, and styles throughout the components using Tailwind's text classes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Layout:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Modify the grid layouts, spacing, and component organization to suit your needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg border-l-4 border-green-400 shadow-sm">
              <h3 className="text-lg font-medium text-green-700 mb-3">Content Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Slide sections:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Edit the <code className="bg-gray-100 px-1 py-0.5 rounded">presentationStructure</code> object in 
                      <code className="bg-gray-100 px-1 py-0.5 rounded">page.tsx</code> to rename, add, or remove sections.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Navigation order:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Adjust the <code className="bg-gray-100 px-1 py-0.5 rounded">slideOrder</code> array to change the 
                      sequence of your slides.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Component structure:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Create new slide components or modify existing ones in the components directory.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-400 shadow-sm">
              <h3 className="text-lg font-medium text-blue-700 mb-3">Animations & Interactions</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Transitions:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Customize the Framer Motion animations in each slide component to change how content appears.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Interactive elements:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Add hover effects, click interactions, or other interactive elements using Tailwind and React.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Navigation controls:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Modify the navigation controls at the bottom of <code className="bg-gray-100 px-1 py-0.5 rounded">page.tsx</code>.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg border-l-4 border-amber-400 shadow-sm">
              <h3 className="text-lg font-medium text-amber-700 mb-3">Advanced Customization</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Tailwind config:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Extend the Tailwind configuration in <code className="bg-gray-100 px-1 py-0.5 rounded">tailwind.config.ts</code> 
                      to add custom colors, fonts, or other design tokens.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">Custom components:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Create reusable UI components for elements like charts, diagrams, or specialized content displays.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <div>
                    <span className="font-medium">External libraries:</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Add additional npm packages for charts, animations, or other specialized functionality.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Working with AI for Customization</h3>
            <p className="text-gray-700 mb-4">
              You can ask AI to help with customization tasks:
            </p>
            <div className="space-y-2">
              <div className="flex">
                <div className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-sm font-medium mr-2">
                  Prompt Example
                </div>
                <p className="text-gray-700">
                  "Help me create a custom slide component for showcasing team members with photos and bios"
                </p>
              </div>
              
              <div className="flex">
                <div className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-sm font-medium mr-2">
                  Prompt Example
                </div>
                <p className="text-gray-700">
                  "Modify the color scheme to use my brand colors: primary #3A86FF, secondary #FF006E"
                </p>
              </div>
              
              <div className="flex">
                <div className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-sm font-medium mr-2">
                  Prompt Example
                </div>
                <p className="text-gray-700">
                  "Add a progress bar at the top of the presentation that shows current slide position"
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 