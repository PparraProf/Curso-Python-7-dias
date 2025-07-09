import type { ReactNode } from 'react';

export interface CodeSnippet {
  code: string;
}

export interface Lesson {
  day: number;
  title: string;
  description: string;
  concepts: { title: string; description: string }[];
  codeExplained: {
    title: string;
    code: CodeSnippet;
  };
  exercise: {
    title: string;
    description: string;
  };
  solution: {
    title:string;
    code: CodeSnippet;
  };
}

export interface SetupGuideContent {
  title: string;
  description: string;
  tools: {
    name: string;
    icon: ReactNode;
    description: string;
  }[];
  steps: {
    title: string;
    description: string;
    points: string[];
  }[];
}

export interface TriviaQuestion {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
}

export interface GlossaryTerm {
    term: string;
    definition: string;
    example: string;
}
