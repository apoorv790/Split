import React from 'react';

const ResultsComponent = ({ salary, expenses, goals }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Budget Breakdown</h2>
      <p>Monthly Salary: ₹{salary}</p>
      <p>Savings: ₹{expenses.savings}</p>
      <p>Fixed Expenses: ₹{expenses.fixedExpenses}</p>
      <p>Remaining Budget: ₹{expenses.remaining}</p>
      <p>Allocated for Goals: ₹{expenses.allocatedForGoals}</p>

      <h3 className="text-xl font-bold mt-4">Goals Overview</h3>
      <p>Long-Term Goals: {goals.longTerm.join(', ')}</p>
      <p>Short-Term Goals: {goals.shortTerm.join(', ')}</p>
    </div>
  );
};

export default ResultsComponent;
