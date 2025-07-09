
import React, { useState, useEffect } from 'react';
import type { Lesson } from '../types.ts';
import CodeBlock from './CodeBlock.tsx';

interface LessonViewProps {
  lesson: Lesson;
}

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-800/70 border border-slate-700/50 p-6 rounded-lg shadow-lg mt-8">
    <h2 className="text-2xl font-semibold text-sky-400 mb-4 border-b border-sky-400/20 pb-2">{title}</h2>
    {children}
  </div>
);

const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);

  // Reset visibility when the lesson changes
  useEffect(() => {
    setIsSolutionVisible(false);
  }, [lesson]);

  return (
    <div className="animate-fade-in">
      <header>
        <p className="text-sm font-semibold text-teal-400">Día {lesson.day}</p>
        <h1 className="text-4xl font-bold text-slate-100 mt-1">{lesson.title}</h1>
        <p className="text-slate-400 mt-4 text-lg">{lesson.description}</p>
      </header>

      <SectionCard title="Conceptos del Día">
        <ul className="space-y-3">
          {lesson.concepts.map((concept, index) => (
            <li key={index}>
              <strong className="text-slate-200">{concept.title}:</strong>
              <span className="text-slate-400 ml-2">{concept.description}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title={lesson.codeExplained.title}>
        <CodeBlock code={lesson.codeExplained.code.code} />
      </SectionCard>
      
      <SectionCard title={lesson.exercise.title}>
        <p className="text-slate-300">{lesson.exercise.description}</p>
      </SectionCard>
      
      <SectionCard title={lesson.solution.title}>
        {isSolutionVisible ? (
          <div className="animate-fade-in">
            <CodeBlock code={lesson.solution.code.code} />
          </div>
        ) : (
          <div className="text-center p-4 bg-slate-900/50 rounded-lg">
            <p className="text-slate-300 mb-4">¡Intenta resolver el ejercicio por tu cuenta antes de ver la solución!</p>
            <button
              onClick={() => setIsSolutionVisible(true)}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 inline-flex items-center gap-2"
              aria-label="Revelar solución del ejercicio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>Revelar Solución</span>
            </button>
          </div>
        )}
      </SectionCard>
    </div>
  );
};

export default LessonView;
