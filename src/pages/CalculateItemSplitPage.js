// src/pages/CalculateItemSplitPage.js
import React, { useState } from 'react';
import { calculateItemSplit } from '../utils/calculateItemSplit';

const CalculateItemSplitPage = () => {
    const [people, setPeople] = useState([{ name: '', itemPrice: 0 }]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [serviceTax, setServiceTax] = useState(0);
    const [results, setResults] = useState([]);

    const addPerson = () => {
        setPeople([...people, { name: '', itemPrice: 0 }]);
    };

    const handlePersonChange = (index, field, value) => {
        const newPeople = [...people];
        newPeople[index][field] = value;
        setPeople(newPeople);
    };

    const calculate = () => {
        const calculatedResults = calculateItemSplit(people, totalAmount, deliveryCharge, serviceTax);
        setResults(calculatedResults);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">Calculate Item Split</h2>
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
                <label className="block mb-2">Delivery Charge:</label>
                <input
                    type="number"
                    className="border px-4 py-2 w-full"
                    value={deliveryCharge}
                    onChange={(e) => setDeliveryCharge(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Service Tax:</label>
                <input
                    type="number"
                    className="border px-4 py-2 w-full"
                    value={serviceTax}
                    onChange={(e) => setServiceTax(e.target.value)}
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
                        type="number"
                        placeholder="Item Price"
                        className="border px-4 py-2 mr-2"
                        value={person.itemPrice}
                        onChange={(e) =>
                            handlePersonChange(index, 'itemPrice', parseFloat(e.target.value))
                        }
                    />
                    {results.length > 0 && (
                        <div className="ml-4">
                            <span className="font-bold">Item Share:</span> {results[index].itemShare.toFixed(2)}<br />
                            <span className="font-bold">Additional Share:</span> {results[index].additionalShare.toFixed(2)}<br />
                            <span className="font-bold">Total Amount to Pay:</span> {results[index].totalShare.toFixed(2)}
                        </div>
                    )}
                </div>
            ))}
            <button onClick={addPerson} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                Add Person
            </button>
            <button onClick={calculate} className="bg-blue-500 text-white px-4 py-2 rounded">
                Calculate
            </button>
        </div>
    );
};

export default CalculateItemSplitPage;
