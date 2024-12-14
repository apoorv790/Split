import React, { useState } from 'react';

const ExpensesCalculator = ({ salary, goals, setExpenses }) => {
  const [savings, setSavings] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState(0);

  const calculateBudget = () => {
    const remaining = salary - (savings + fixedExpenses);
    setExpenses({
      savings,
      fixedExpenses,
      remaining,
      allocatedForGoals: remaining * 0.2, // Allocate 20% for goals
    });
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">Set Your Monthly Savings:</label>
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        onChange={(e) => setSavings(Number(e.target.value))}
      />
      <label className="block text-lg font-medium mb-2">Set Your Fixed Expenses:</label>
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        onChange={(e) => setFixedExpenses(Number(e.target.value))}
      />
      <button className="w-full bg-green-500 text-white p-3 rounded-md" onClick={calculateBudget}>
        Calculate Budget
      </button>
    </div>
  );
};

export default ExpensesCalculator;
