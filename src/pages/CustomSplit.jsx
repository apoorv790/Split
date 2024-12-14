// src/pages/CustomSplitPage.js
import React, { useState } from 'react';
// import './CustomSplitPage.css';

const CustomSplit = ({ onCalculate }) => {
    const [people, setPeople] = useState([{ name: '', amountSpent: 0 }]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [basis, setBasis] = useState('');

    const addPerson = () => {
        setPeople([...people, { name: '', amountSpent: 0 }]);
    };

    const handlePersonChange = (index, field, value) => {
        const newPeople = [...people];
        newPeople[index][field] = value;
        setPeople(newPeople);
    };

    const calculateSplit = () => {
        // Add your split calculation logic here
        onCalculate(people, totalAmount, basis);
    };

    return (
        <div className="custom-split-page">
            <h2>Create Your Own Split</h2>
            <div>
                <label>Total Amount Spent:</label>
                <input
                    type="number"
                    value={totalAmount}
                    onChange={(e) => setTotalAmount(e.target.value)}
                />
            </div>
            <div>
                <label>Basis for Split:</label>
                <select
                    value={basis}
                    onChange={(e) => setBasis(e.target.value)}
                >
                    <option value="days">Days Spent</option>
                    <option value="hours">Hours Used</option>
                    <option value="quantity">Quantity of Items</option>
                </select>
            </div>
            {people.map((person, index) => (
                <div key={index} className="person-details">
                    <input
                        type="text"
                        placeholder="Name"
                        value={person.name}
                        onChange={(e) =>
                            handlePersonChange(index, 'name', e.target.value)
                        }
                    />
                    <input
                        type="number"
                        placeholder="Amount Spent"
                        value={person.amountSpent}
                        onChange={(e) =>
                            handlePersonChange(
                                index,
                                'amountSpent',
                                e.target.value
                            )
                        }
                    />
                </div>
            ))}
            <button onClick={addPerson}>Add Person</button>
            <button onClick={calculateSplit}>Calculate</button>
        </div>
    );
};

export default CustomSplit;
