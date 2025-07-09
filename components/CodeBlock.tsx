
import React, { useState, useCallback } from 'react';
import { CheckIcon, ClipboardIcon } from '../constants.tsx';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
  }, [code]);

  const highlightSyntax = useCallback((text: string): React.ReactNode => {
    const nodes: React.ReactNode[] = [];
    let lastIndex = 0;

    // The order of alternatives in the regex is important. First match wins.
    // Functions must come before keywords if they share names (like 'print').
    const specialFunctions = ['range', 'int', 'float', 'print', 'input'];
    const keywords = ['if', 'elif', 'else', 'for', 'in', 'while', 'True', 'False', 'and', 'not', 'or', 'def', 'return', 'break', 'from', 'import'];

    const tokenRegex = new RegExp(
      [
        `(#.*)`, // 1: comment
        `(".+?"|'.+?')`, // 2: string
        `\\b(${specialFunctions.join('|')})(?=\\()`, // 3: function call
        `\\b(${keywords.join('|')})\\b`, // 4: keyword
        `\\b(\\d+(?:\\.\\d+)?)\\b`, // 5: number (using (?:) for non-capturing group for the decimal part)
      ].join('|'),
      'g'
    );
    
    for (const match of text.matchAll(tokenRegex)) {
        // The groups are 1-indexed in the match array. match[0] is the full match.
        const [fullMatch, comment, string, func, keyword, number] = match;
        
        // Add the plain text part before the match
        if (match.index! > lastIndex) {
            nodes.push(text.substring(lastIndex, match.index));
        }

        if (comment) {
            nodes.push(<span className="text-green-400/90">{comment}</span>);
        } else if (string) {
            nodes.push(<span className="text-amber-400/90">{string}</span>);
        } else if (func) {
            nodes.push(<span className="text-teal-300/90">{func}</span>);
        } else if (keyword) {
            nodes.push(<span className="text-sky-400/90">{keyword}</span>);
        } else if (number) {
            nodes.push(<span className="text-purple-400/90">{number}</span>);
        } else {
            nodes.push(fullMatch); // Fallback for safety
        }
        
        lastIndex = match.index! + fullMatch.length;
    }

    // Add the remaining text after the last match
    if (lastIndex < text.length) {
        nodes.push(text.substring(lastIndex));
    }
    
    // The `nodes` array now contains strings and <span> elements.
    // We wrap them in fragments with keys for React's rendering loop.
    return <code>{nodes.map((node, i) => <React.Fragment key={i}>{node}</React.Fragment>)}</code>;
  }, []);

  return (
    <div className="bg-slate-900/70 border border-slate-700/50 rounded-lg my-4 relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Copiar código"
      >
        {isCopied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
      </button>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        {highlightSyntax(code)}
      </pre>
    </div>
  );
};

export default CodeBlock;