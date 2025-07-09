
import React from 'react';
import type { Lesson } from '../types.ts';

interface SidebarProps {
  lessons: Lesson[];
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ lessons, activeSection, onSelectSection }) => {
  const NavLink: React.FC<{ sectionId: string; children: React.ReactNode }> = ({ sectionId, children }) => {
    const isActive = activeSection === sectionId;
    return (
      <button
        onClick={() => onSelectSection(sectionId)}
        className={`w-full text-left px-4 py-2.5 text-sm rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-teal-500/20 text-teal-300'
            : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <aside className="w-64 h-full bg-slate-900 border-r border-slate-700/50 p-4 flex flex-col">
      <h1 className="text-xl font-bold text-white mb-2">Aprende Python</h1>
      <p className="text-xs text-slate-400 mb-6">Curso de 7 Días</p>
      <nav className="space-y-2">
        <NavLink sectionId="setup">
          <span className="font-semibold">Configuración</span>
        </NavLink>
        
        <div className="pt-4 mt-4 border-t border-slate-700/50">
           <h2 className="px-4 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">Lecciones</h2>
          <div className="space-y-1">
            {lessons.map((lesson) => (
              <NavLink key={lesson.day} sectionId={`day-${lesson.day}`}>
                Día {lesson.day}: {lesson.title.split(' - ')[0]}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-700/50">
            <h2 className="px-4 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2">Extras</h2>
            <div className="space-y-1">
                <NavLink sectionId="trivias">
                    Trivias
                </NavLink>
                <NavLink sectionId="glossary">
                    Glosario Interactivo
                </NavLink>
            </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;