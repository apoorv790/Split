// src/pages/CalculateDutchPage.js
import React, { useState } from 'react';
import { calculateSplit } from '../utils/calculateSplit';

const CalculateDutchPage = ({ onCalculate }) => {
    const [people, setPeople] = useState([{ name: '', stayStartDate: '', stayEndDate: '' }]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [results, setResults] = useState([]);

    const addPerson = () => {
        setPeople([...people, { name: '', stayStartDate: '', stayEndDate: '' }]);
    };

    const handlePersonChange = (index, field, value) => {
        const newPeople = [...people];
        newPeople[index][field] = value;
        setPeople(newPeople);
    };

    const calculate = () => {
        const calculatedResults = calculateSplit(people, startDate, endDate, totalAmount);
        setResults(calculatedResults);
        onCalculate(calculatedResults, totalAmount);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">Create Your Own Split</h2>
            <div className="mb-4">
                <label className="block mb-2">Total Amount Spent:</label>
                <input
                    type="number"
                    className="border px-4 py-2 w-full"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Bill Start Date:</label>
                <input
                    type="date"
                    className="border px-4 py-2 w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Bill End Date:</label>
                <input
                    type="date"
                    className="border px-4 py-2 w-full"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            {people.map((person, index) => (
                <div key={index} className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border px-4 py-2 mr-2"
                        value={person.name}
                        onChange={(e) =>
                            handlePersonChange(index, 'name', e.target.value)
                        }
                    />
                    <input
                        type="date"
                        placeholder="Stay Start Date"
                        className="border px-4 py-2 mr-2"
                        value={person.stayStartDate}
                        onChange={(e) =>
                            handlePersonChange(index, 'stayStartDate', e.target.value)
                        }
                    />
                    <input
                        type="date"
                        placeholder="Stay End Date"
                        className="border px-4 py-2 mr-2"
                        value={person.stayEndDate}
                        onChange={(e) =>
                            handlePersonChange(index, 'stayEndDate', e.target.value)
                        }
                    />
                    {results.length > 0 && (
                        <div className="ml-4">
                            <span className="font-bold">Days Stayed:</span> {results[index].daysStayed}<br />
                            <span className="font-bold">Percentage of Total Days:</span> {results[index].percentageOfTotalDays.toFixed(2)}%<br />
                            <span className="font-bold">Amount to Pay:</span> {results[index].share.toFixed(2)}
                        </div>
                    )}
                </div>
            ))}
            <button onClick={addPerson} className="bg-violet-500 text-white px-4 py-2 rounded mr-2">
                Add Person
            </button>
            <button onClick={calculate} className="bg-blue-950 text-white px-4 py-2 rounded mx-10">
                Calculate
            </button>
        </div>
    );
};

export default CalculateDutchPage;
