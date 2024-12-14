// src/App.js

import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import HomePage from './pages/HomePage';
import CalculateDutchPage from './pages/CalculateDutchPage';
import CalculateItemSplitPage from './pages/CalculateItemSplitPage.js'

const App = () => {
  return (
    <div className="app">
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/calculate-dutch" element={<CalculateDutchPage onCalculate={handleCalculate} />} />
        <Route path="/calculate-item-page" element={<CalculateItemSplitPage onCalculate={handleCalculate} />} />
      </Routes>
    </div>
  );
};

const HomePageWrapper = () => {
  const navigate = useNavigate();
  const handleCalculateDutchClick = () => {
    navigate('/calculate-dutch');
  };

  return <HomePage onCalculateClick={handleCalculateDutchClick} />;
};

const handleCalculate = (people, totalAmount) => {
  // Handle the split calculation logic
  console.log(people, totalAmount);
};

export default App;
 
// main app above

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import CalculateDutchPage from './pages/CalculateDutchPage.js';
// import CalculateItemSplitPage from './pages/CalculateItemSplitPage.js';

// const App = () => {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/calculate-dutch" element={<CalculateDutchPage />} />
//                     <Route path="/calculate-item-split" element={<CalculateItemSplitPage />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;







// import React, { useState } from 'react';
// import SalaryInput from './SalaryInput.jsx';
// import GoalsInput from './GoalsInput.jsx';
// import ExpensesCalculator from './ExpenseCalculator.jsx';
// import ResultsComponent from './ResultsComponent.jsx';

// const App = () => {
//   const [salary, setSalary] = useState(0);
//   const [goals, setGoals] = useState({ longTerm: [], shortTerm: [] });
//   const [expenses, setExpenses] = useState({});

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">Financial Planner</h1>
//       <SalaryInput setSalary={setSalary} />
//       <GoalsInput setGoals={setGoals} />
//       <ExpensesCalculator salary={salary} goals={goals} setExpenses={setExpenses} />
//       <ResultsComponent salary={salary} expenses={expenses} goals={goals} />
//     </div>
//   );
// };

// export default App;
