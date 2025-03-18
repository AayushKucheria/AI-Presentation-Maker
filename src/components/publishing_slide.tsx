import { motion } from 'framer-motion';

export default function PublishingSlide() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-amber-600">Publishing Your Slides</h2>
        
        <div className="space-y-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
            <h3 className="text-lg font-semibold mb-3 text-amber-700">Sharing Your Presentation with the World</h3>
            <p className="text-gray-700">
              Once you've created your presentation, you'll want to share it with your audience. This template is designed to make publishing simple, 
              with easy deployment to GitHub Pages or other hosting platforms.
            </p>
          </div>
          
          <div className="space-y-5">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <div className="bg-amber-600 px-6 py-3">
                <h3 className="text-lg font-medium text-white">GitHub Pages Deployment</h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700">
                  The simplest way to publish your presentation is using GitHub Pages, which provides free hosting directly from your repository.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 1: Push to GitHub</h4>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono">
                    # Initialize a new repository<br/>
                    git init<br/>
                    git add .<br/>
                    git commit -m "Initial commit"<br/>
                    <br/>
                    # Link to your GitHub repo<br/>
                    git remote add origin https://github.com/YOUR_USERNAME/your-presentation.git<br/>
                    git push -u origin main
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 2: Build the Project</h4>
                  <div className="bg-gray-800 text-gray-200 p-3 rounded text-sm font-mono">
                    # Build the project for production<br/>
                    npm run deploy
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This command will build your project and create a production-ready version in the <code className="bg-gray-100 px-1 py-0.5 rounded">out</code> directory, 
                    along with a <code className="bg-gray-100 px-1 py-0.5 rounded">.nojekyll</code> file needed for GitHub Pages.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 3: Configure GitHub Pages</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Go to your repository on GitHub</li>
                    <li>Click on "Settings" → "Pages"</li>
                    <li>Under "Source", select "GitHub Actions"</li>
                    <li>Select the "Static HTML" workflow</li>
                    <li>Commit the workflow file to your repository</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-3">
                    Your presentation will be published at: <code className="bg-gray-100 px-1 py-0.5 rounded">https://YOUR_USERNAME.github.io/your-presentation</code>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-medium text-blue-700 mb-3">Alternative Hosting Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">Vercel:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Import your repository on Vercel for automatic deployments and preview URLs for each commit.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">Netlify:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Another excellent option for hosting static sites with continuous deployment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">AWS S3/Cloudfront:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        For enterprise-grade hosting with high performance and scalability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-medium text-green-700 mb-3">Sharing Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">Custom domain:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Configure a custom domain in your hosting provider's settings for a professional URL.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">QR code:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Generate a QR code linking to your presentation for easy sharing in physical settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <div>
                      <span className="font-medium">Present mode:</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Use your browser's full-screen mode (F11) when presenting to hide browser UI elements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Using AI to Enhance Your Deployment</h3>
            <p className="text-gray-700 mb-3">
              You can also ask AI to help with deployment tasks:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">➤</span>
                <span>"Help me set up GitHub Actions for automated deployment"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">➤</span>
                <span>"Create a script to automatically update my presentation when document content changes"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">➤</span>
                <span>"Help me configure SEO metadata for my presentation"</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 