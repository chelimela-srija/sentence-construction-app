import React from "react";
import { questions } from "./data/questions";
import { SentenceQuestion } from "./components/SentenceQuestion";

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 space-y-6">
      <h1 className="text-2xl font-bold text-center">Sentence Construction Quiz</h1>
      {questions.map((q) => (
        <SentenceQuestion key={q.questionId} question={q} />
      ))}
    </div>
  );
}

export default App;