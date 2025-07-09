
import React, { useState, useMemo } from 'react';
import type { GlossaryTerm } from '../types.ts';
import CodeBlock from './CodeBlock.tsx';

interface GlossaryViewProps {
  terms: GlossaryTerm[];
}

const GlossaryView: React.FC<GlossaryViewProps> = ({ terms }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return terms
      .filter(term => term.term.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [terms, searchTerm]);

  const toggleTerm = (term: string) => {
    setExpandedTerm(expandedTerm === term ? null : term);
  };

  return (
    <div className="animate-fade-in">
      <header>
        <h1 className="text-4xl font-bold text-slate-100">Glosario Interactivo</h1>
        <p className="text-slate-400 mt-4 text-lg">Busca y explora los términos más importantes de Python.</p>
      </header>

      <div className="my-8">
        <input
          type="text"
          placeholder="Buscar un término..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <div className="space-y-4">
        {filteredTerms.length > 0 ? (
            filteredTerms.map(term => {
              const isExpanded = expandedTerm === term.term;
              const contentId = `term-content-${term.term.replace(/\s+/g, '-').toLowerCase()}`;
              
              return (
                <div key={term.term} className="bg-slate-800/70 border border-slate-700/50 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleTerm(term.term)}
                      className="w-full flex justify-between items-center p-5 text-left"
                      aria-expanded={isExpanded}
                      aria-controls={contentId}
                    >
                      <h2 className="text-xl font-semibold text-sky-400">{term.term}</h2>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                      >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id={contentId}
                      className={`transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 pb-5">
                          <p className="text-slate-300 mb-4">{term.definition}</p>
                          <CodeBlock code={term.example} />
                      </div>
                    </div>
                </div>
              );
            })
        ) : (
            <div className="text-center py-10">
                <p className="text-slate-400">No se encontraron términos para "{searchTerm}".</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryView;
