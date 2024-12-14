import React, { useState } from 'react';

const GoalsInput = ({ setGoals }) => {
  const [longTermGoals, setLongTermGoals] = useState([]);
  const [shortTermGoals, setShortTermGoals] = useState([]);

  const handleSubmit = () => {
    setGoals({ longTerm: longTermGoals, shortTerm: shortTermGoals });
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">Set Your Long-Term Goals:</label>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="E.g., Home Purchase, FIRE, Pension"
        onChange={(e) => setLongTermGoals(e.target.value.split(','))}
      />
      <label className="block text-lg font-medium mb-2">Set Your Short-Term Goals:</label>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="E.g., Vacation, Debt Repayment"
        onChange={(e) => setShortTermGoals(e.target.value.split(','))}
      />
      <button
        className="w-full bg-blue-500 text-white p-3 rounded-md"
        onClick={handleSubmit}
      >
        Submit Goals
      </button>
    </div>
  );
};

export default GoalsInput;
