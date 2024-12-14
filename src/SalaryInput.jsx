import React from 'react';

const SalaryInput = ({ setSalary }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">Enter Your Monthly Salary:</label>
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md"
        onChange={(e) => setSalary(e.target.value)}
        placeholder="₹"
      />
    </div>
  );
};

export default SalaryInput;
