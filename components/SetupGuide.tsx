

import React from 'react';
import type { SetupGuideContent } from '../types.ts';

const SetupGuide: React.FC<{ content: SetupGuideContent }> = ({ content }) => {
  return (
    <div className="animate-fade-in">
      <header>
        <h1 className="text-4xl font-bold text-slate-100">{content.title}</h1>
        <p className="text-slate-400 mt-4 text-lg">{content.description}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {content.tools.map(tool => (
          <div key={tool.name} className="bg-slate-800/70 border border-slate-700/50 p-6 rounded-lg flex flex-col items-start">
            <div className="flex items-center gap-4 mb-3">
              {tool.icon}
              <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
            </div>
            <p className="text-slate-400">{tool.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        {content.steps.map((step, index) => (
          <div key={index} className="bg-slate-800/70 border border-slate-700/50 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4">{step.title}</h2>
            <p className="text-slate-400 mb-5">{step.description}</p>
            <ul className="space-y-3 list-disc list-inside text-slate-300">
              {step.points.map((point, pIndex) => (
                <li key={pIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupGuide;