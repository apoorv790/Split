// // src/pages/HomePage.js
// import React from 'react';

// const HomePage = ({ onCalculateClick }) => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-4xl mb-8">Welcome to Expense Splitter</h1>
//             <button
//                 onClick={onCalculateClick}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//                 Continue Without Login
//             </button>
//         </div>
//     );
// };

// export default HomePage;

// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl mb-4 py-4">Welcome to the Split Calculator</h1>
            <div className="m-10 gap-10" >
                <Link to="/calculate-dutch" className="bg-violet-600 text-white px-4 py-2 rounded mr-2">
                    Calculate Dutch Split
                </Link>
                <Link to="/calculate-item-split" className="bg-violet-600 text-white px-4 py-2 rounded">
                    Calculate Item Split
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
