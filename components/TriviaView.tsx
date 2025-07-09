
import React, { useState, useMemo } from 'react';
import type { TriviaQuestion } from '../types.ts';

interface TriviaViewProps {
  trivias: { [key: number]: TriviaQuestion[] };
}

const TriviaView: React.FC<TriviaViewProps> = ({ trivias }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const dailyTrivia = useMemo(() => trivias[selectedDay] || [], [trivias, selectedDay]);
  const currentQuestion = dailyTrivia[currentQuestionIndex];
  
  const handleDayChange = (day: number) => {
    setSelectedDay(day);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setShowFeedback(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    setUserAnswers([...userAnswers, isCorrect ? 1 : 0]);
    setShowFeedback(false);
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowFeedback(false);
  }

  const score = userAnswers.reduce((sum, answer) => sum + answer, 0);

  return (
    <div className="animate-fade-in">
      <header>
        <h1 className="text-4xl font-bold text-slate-100">Trivias de Python</h1>
        <p className="text-slate-400 mt-4 text-lg">Pon a prueba tus conocimientos de cada lección.</p>
      </header>
      
      <div className="my-8">
        <div className="flex flex-wrap gap-2 border-b border-slate-700">
          {Object.keys(trivias).map(dayStr => {
            const day = parseInt(dayStr, 10);
            return (
                <button
                key={day}
                onClick={() => handleDayChange(day)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    selectedDay === day 
                    ? 'border-teal-400 text-teal-300' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
                >
                Día {day}
                </button>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-800/70 border border-slate-700/50 p-6 md:p-8 rounded-lg shadow-lg">
        {currentQuestionIndex < dailyTrivia.length ? (
          <div>
            <p className="text-sm font-semibold text-sky-400">Pregunta {currentQuestionIndex + 1} de {dailyTrivia.length}</p>
            <h2 className="text-xl text-slate-100 mt-2 mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 rounded-md border transition-all duration-200 ";
                if (showFeedback) {
                  if (index === currentQuestion.correctAnswerIndex) {
                    buttonClass += "bg-green-500/20 border-green-500 text-green-300";
                  } else if (index === selectedOption) {
                    buttonClass += "bg-red-500/20 border-red-500 text-red-300";
                  } else {
                     buttonClass += "bg-slate-700/50 border-slate-600 text-slate-300";
                  }
                } else {
                   buttonClass += "bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 hover:border-sky-500 text-slate-300";
                   if (selectedOption === index) {
                       buttonClass += " border-sky-500 ring-2 ring-sky-500/50";
                   }
                }
                return (
                    <button key={index} onClick={() => handleOptionSelect(index)} className={buttonClass} disabled={showFeedback}>
                        {option}
                    </button>
                );
              })}
            </div>
            
            {showFeedback && (
              <div className={`mt-6 p-4 rounded-md ${selectedOption === currentQuestion.correctAnswerIndex ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
                <h3 className="font-bold text-lg">{selectedOption === currentQuestion.correctAnswerIndex ? '¡Correcto!' : 'Incorrecto'}</h3>
                <p className="text-slate-300 mt-1">{currentQuestion.explanation}</p>
              </div>
            )}
            
            <div className="mt-8 text-right">
              {showFeedback ? (
                  <button onClick={handleNext} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200">
                      Siguiente
                  </button>
              ) : (
                  <button onClick={handleSubmit} disabled={selectedOption === null} className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200 disabled:bg-slate-600 disabled:cursor-not-allowed">
                      Comprobar
                  </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-100">¡Trivia completada!</h2>
            <p className="text-slate-300 mt-2 text-lg">Tu puntuación final es:</p>
            <p className="text-5xl font-bold text-teal-400 my-4">{score} / {dailyTrivia.length}</p>
            <button onClick={handleRestart} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200">
                Volver a intentar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TriviaView;