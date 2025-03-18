"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import IntroSlide from "@/components/intro_slide";
import HowItWorksSlide from "@/components/how_it_works_slide";
import AddingContentSlide from "@/components/adding_content_slide";
import CustomizationSlide from "@/components/customization_slide";
import PublishingSlide from "@/components/publishing_slide";
import ResourcesSlide from "@/components/resources_slide";

// Define the structure of our presentation with sections
const presentationStructure = {
  intro: { title: 'AI Slides Template' },
  how_it_works: { title: 'How It Works' },
  adding_content: { title: 'Adding Your Content' },
  customization: { title: 'Customization Options' },
  publishing: { title: 'Publishing Your Slides' },
  resources: { title: 'Additional Resources' }
};

// Type for our slide sections
type SlideSection = keyof typeof presentationStructure;

export default function Home() {
  // Track the current section
  const [activeSlide, setActiveSlide] = useState<SlideSection>('intro');
  
  // Define the slide order for navigation
  const slideOrder = useMemo<SlideSection[]>(() => 
    ['intro', 'how_it_works', 'adding_content', 'customization', 'publishing', 'resources']
  , []);
  
  // Function to navigate to the next slide
  const goToNextSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    
    // Go to the next section (if available)
    if (currentSectionIndex < slideOrder.length - 1) {
      const nextSection = slideOrder[currentSectionIndex + 1];
      setActiveSlide(nextSection);
    }
  }, [activeSlide, slideOrder]);
  
  // Function to navigate to the previous slide
  const goToPreviousSlide = useCallback(() => {
    const currentSectionIndex = slideOrder.indexOf(activeSlide);
    
    // Go to the previous section (if available)
    if (currentSectionIndex > 0) {
      const prevSection = slideOrder[currentSectionIndex - 1];
      setActiveSlide(prevSection);
    }
  }, [activeSlide, slideOrder]);
  
  // Function to directly navigate to a specific section
  const goToSection = (section: SlideSection) => {
    setActiveSlide(section);
  };
  
  // Add keyboard event listeners for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, goToNextSlide, goToPreviousSlide]);
  
  // Check if we're at the first slide overall
  const isFirstSlide = activeSlide === slideOrder[0];
  
  // Check if we're at the last slide overall
  const isLastSlide = activeSlide === slideOrder[slideOrder.length - 1];
  
  // Get background color for slide buttons based on section
  const getSectionColor = (section: SlideSection) => {
    const colors = {
      intro: 'bg-emerald-600',
      how_it_works: 'bg-blue-600',
      adding_content: 'bg-indigo-600',
      customization: 'bg-purple-600',
      publishing: 'bg-amber-600',
      resources: 'bg-rose-600'
    };
    return colors[section] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-green-500">
          AI-Powered Presentation Template
        </h1>
        
        <div className="text-sm text-gray-500 mt-1">
          Create beautiful presentations with AI assistance
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {slideOrder.map((section) => (
            <button 
              key={section}
              onClick={() => goToSection(section)} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSlide === section 
                  ? getSectionColor(section) + ' text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {presentationStructure[section].title}
            </button>
          ))}
        </div>
      </header>
      
      <div className="container mx-auto">
        {activeSlide === 'intro' ? (
          <IntroSlide />
        ) : activeSlide === 'how_it_works' ? (
          <HowItWorksSlide />
        ) : activeSlide === 'adding_content' ? (
          <AddingContentSlide />
        ) : activeSlide === 'customization' ? (
          <CustomizationSlide />
        ) : activeSlide === 'publishing' ? (
          <PublishingSlide />
        ) : (
          <ResourcesSlide />
        )}
        
        {/* Template footer */}
        <div className="mt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-3">
          <span className="font-medium">AI Slides Template</span>
          <span className="text-gray-300">|</span>
          <a 
            href="https://github.com/YOUR_USERNAME/ai-slides-template" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="flex justify-between mt-8 max-w-4xl mx-auto px-4">
        <button 
          onClick={goToPreviousSlide}
          disabled={isFirstSlide}
          className={`px-4 py-2 rounded-md ${
            isFirstSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ← Previous
        </button>
        
        <div className="text-sm text-gray-500 self-center flex flex-col items-center">
          <div className="mb-1">
            {slideOrder.indexOf(activeSlide) + 1} / {slideOrder.length}
          </div>
          <div className="text-xs text-gray-400">
            {presentationStructure[activeSlide].title}
          </div>
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={isLastSlide}
          className={`px-4 py-2 rounded-md ${
            isLastSlide
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
