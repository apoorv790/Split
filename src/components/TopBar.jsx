// src/components/TopBar.js
import React from 'react';

const TopBar = () => {
    return (
        <div className="flex justify-between items-center p-4 shadow-md">
            <div className="text-xl font-bold text-violet-600">Expense Splitter</div>
            <div>
                <button className="mr-4 bg-blue-500 px-4 py-2 rounded">Login</button>
                <button className="bg-green-500 px-4 py-2 rounded">Sign Up</button>
            </div>
        </div>
    );
};

export default TopBar;
