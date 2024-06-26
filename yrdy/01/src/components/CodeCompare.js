import React, { useState } from 'react';
import { diffChars } from 'diff';
import 'tailwindcss/tailwind.css';

const CodeCompare = () => {
  const [leftCode, setLeftCode] = useState('');
  const [rightCode, setRightCode] = useState('');

  const renderDiff = () => {
    const diffs = diffChars(leftCode, rightCode);
    return diffs.map((part, index) => {
      const className = part.added ? 'bg-green-300' : part.removed ? 'bg-red-300' : '';
      return <span key={index} className={className}>{part.value}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Code Diff Viewer</h1>
      <div className="grid grid-cols-2 gap-4">
        <textarea
          className="w-full h-64 p-2 border border-gray-300 rounded"
          placeholder="Left code"
          value={leftCode}
          onChange={(e) => setLeftCode(e.target.value)}
        />
        <textarea
          className="w-full h-64 p-2 border border-gray-300 rounded"
          placeholder="Right code"
          value={rightCode}
          onChange={(e) => setRightCode(e.target.value)}
        />
      </div>
      <h2 className="text-xl font-bold mt-4">Differences</h2>
      <div className="whitespace-pre-wrap bg-white p-4 mt-2 border border-gray-300 rounded">
        {renderDiff()}
      </div>
    </div>
  );
};

export default CodeCompare;
