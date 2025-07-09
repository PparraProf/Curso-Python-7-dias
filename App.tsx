
import React, { useState, useEffect } from 'react';
import { LESSONS, SETUP_GUIDE, TRIVIAS_DATA, GLOSSARY_DATA } from './constants.tsx';
import Sidebar from './components/Sidebar.tsx';
import LessonView from './components/LessonView.tsx';
import SetupGuide from './components/SetupGuide.tsx';
import TriviaView from './components/TriviaView.tsx';
import GlossaryView from './components/GlossaryView.tsx';
import LandingPage from './components/LandingPage.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('setup');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const currentLesson = LESSONS.find(lesson => `day-${lesson.day}` === activeSection);

  useEffect(() => {
    // Close mobile menu when a section is selected
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [activeSection]);
  
  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smoothly scroll to top of content area
    document.getElementById('main-content')?.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  
  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans flex relative">
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-[60] p-2 bg-slate-800 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setIsMobileMenuOpen(false)}></div>}
      
      {/* Mobile Sidebar Panel */}
      <div className={`md:hidden fixed top-0 left-0 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar
              lessons={LESSONS}
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
          />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-shrink-0">
        <Sidebar
          lessons={LESSONS}
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
        />
      </div>
      
      <main id="main-content" className="flex-1 p-4 md:p-10 lg:p-12 overflow-y-auto h-screen">
        <div className="max-w-4xl mx-auto">
          {activeSection === 'setup' && <SetupGuide content={SETUP_GUIDE} />}
          {currentLesson && <LessonView lesson={currentLesson} />}
          {activeSection === 'trivias' && <TriviaView trivias={TRIVIAS_DATA} />}
          {activeSection === 'glossary' && <GlossaryView terms={GLOSSARY_DATA} />}
        </div>
      </main>
    </div>
  );
};

export default App;
