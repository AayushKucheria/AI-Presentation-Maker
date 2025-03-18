import { motion } from 'framer-motion';

export default function AddingContentSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Adding Your Content</h2>
        
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold mb-3 text-indigo-700">Document-Based Content Structure</h3>
            <p className="text-gray-700">
              The AI Slides Template uses a document-first approach. You'll add your content as documents in the <code className="bg-gray-100 px-1 py-0.5 rounded">docs</code> folder, 
              and then work with AI to transform these documents into beautiful slides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">context.md</h3>
              </div>
              <p className="text-gray-600 text-sm">
                This is your main content document. Add your presentation content, research, data points, and main ideas here.
              </p>
              <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono">
                # My Presentation Topic<br/>
                <br/>
                ## Main Points<br/>
                - Key point 1<br/>
                - Key point 2<br/>
                <br/>
                ## Supporting Data<br/>
                Important facts and figures...
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">guidelines.txt</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Provide specific guidelines about the style, tone, and design preferences for your presentation.
              </p>
              <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono">
                Style: Modern, minimalist<br/>
                Colors: Blue and teal theme<br/>
                Tone: Professional but approachable<br/>
                Include: Data visualizations<br/>
                Avoid: Too much text per slide
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                    <path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">Additional Documents</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Add any supplementary documents that provide context, background information, or specialized content.
              </p>
              <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono">
                research_paper.md<br/>
                market_data.csv<br/>
                product_specs.txt<br/>
                audience_analysis.md
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium">images/</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Store images for your presentation in the <code className="bg-gray-100 px-1 py-0.5 rounded">docs/images</code> folder to easily reference them.
              </p>
              <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono">
                logo.png<br/>
                chart1.jpg<br/>
                product_photo.png<br/>
                team_photo.jpg
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="text-lg font-semibold mb-3 text-green-700">Working with AI to Structure Your Content</h3>
            <p className="text-gray-700 mb-4">
              Once you've added your documents, you can work with AI to structure your content into slides. Here are some example prompts:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">➤</span>
                <span>"Read through my documents and suggest a slide structure for my presentation"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">➤</span>
                <span>"Help me turn the research data in context.md into compelling visualizations"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">➤</span>
                <span>"Create engaging content for the 'Key Benefits' slide based on my guidelines"</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 