import { motion } from 'framer-motion';

export default function HowItWorksSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600">How It Works</h2>
        
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">The AI Slides Workflow</h3>
            <p className="text-gray-700 mb-4">
              This template is designed to leverage AI as your presentation assistant. The workflow follows these key steps:
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-xl">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Add Your Source Documents</h3>
                <p className="text-gray-700">
                  Place your content, research, notes, and guidelines in the <code className="bg-gray-100 px-1 py-0.5 rounded">docs</code> folder. 
                  These documents will form the foundation of your presentation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-xl">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Collaborate with AI</h3>
                <p className="text-gray-700">
                  Use Cursor with Agent Mode enabled to discuss your presentation with Claude. Ask it to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Read and understand your documents</li>
                  <li>Help structure your presentation</li>
                  <li>Create engaging slide content</li>
                  <li>Suggest design elements and visuals</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-xl">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Customize Your Slides</h3>
                <p className="text-gray-700">
                  Work with AI to update the slide components in <code className="bg-gray-100 px-1 py-0.5 rounded">src/components</code>. 
                  Each slide is a React component that can be fully customized.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold text-xl">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Preview & Publish</h3>
                <p className="text-gray-700">
                  Use <code className="bg-gray-100 px-1 py-0.5 rounded">npm run dev</code> to preview your slides locally, 
                  then deploy to GitHub Pages or your preferred hosting service.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-100">
            <h3 className="text-lg font-semibold mb-3 text-yellow-800">AI Collaboration Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">💡</span>
                <span className="text-gray-700">Be specific about your presentation goals and audience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">💡</span>
                <span className="text-gray-700">Ask AI to suggest slide organization based on your documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">💡</span>
                <span className="text-gray-700">Iterate with AI to refine slides until they match your vision</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600">💡</span>
                <span className="text-gray-700">Provide feedback on design preferences and aesthetics</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 