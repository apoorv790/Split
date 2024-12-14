// src/pages/TemplatesPage.js
import React from 'react';
// import './TemplatesPage.css';

const Templates = ({ onTemplateSelect, onCreateYourOwn }) => {
    return (
        <div className="templates-page">
            <h2>Select a Template</h2>
            <button onClick={() => onTemplateSelect('outing')}>Outing</button>
            <button onClick={() => onTemplateSelect('house-rent')}>House Rent</button>
            <button onClick={() => onTemplateSelect('travel')}>Travel Expenses</button>
            <button onClick={onCreateYourOwn}>Create Your Own</button>
        </div>
    );
};

export default Templates;
