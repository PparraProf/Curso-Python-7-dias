import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <>
      <style>{`
        .animated-gradient {
          background: linear-gradient(-45deg, #0f172a, #1e293b, #0369a1, #0d9488);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .text-glow {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3), 0 0 20px rgba(99, 222, 255, 0.4);
        }
      `}</style>
      <div className="min-h-screen w-full flex flex-col items-center justify-center animated-gradient text-white text-center p-4">
        <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-glow">
            Python Quest
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-300">
            Tu Aventura de Código en 7 Días
            </p>
            <button
            onClick={onStart}
            className="mt-12 px-8 py-4 bg-teal-500/80 hover:bg-teal-400/90 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out border-2 border-teal-400/50"
            >
            Comenzar la Aventura
            </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
