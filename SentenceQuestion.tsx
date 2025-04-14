import React, { useState } from "react";
import type { Question } from "../data/questions";

type Props = {
  question: Question;
};

export const SentenceQuestion: React.FC<Props> = ({ question }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (word: string) => {
    if (selectedWords.includes(word)) return;
    setSelectedWords([...selectedWords, word]);
  };

  const handleReset = () => {
    setSelectedWords([]);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isCorrect =
    JSON.stringify(selectedWords) === JSON.stringify(question.correctAnswer);

  return (
    <div className="p-4 bg-white shadow rounded-xl space-y-4">
      <p className="text-lg font-medium">{question.question}</p>
      <div className="flex flex-wrap gap-2">
        {question.options.map((option, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full border ${
              selectedWords.includes(option)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-100 hover:bg-blue-200"
            }`}
            onClick={() => handleSelect(option)}
            disabled={isSubmitted}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedWords.map((word, index) => (
          <span key={index} className="px-3 py-1 bg-green-100 rounded-full">
            {word}
          </span>
        ))}
      </div>
      <div className="space-x-2">
        {!isSubmitted ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <>
            <span className={`text-lg font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
            <button
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              onClick={handleReset}
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};