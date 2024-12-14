// // src/utils/calculateSplit.js
// export const calculateSplit = (people, startDate, endDate, totalAmount) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const daysStayed = people.map(person => {
//         const stayStart = new Date(person.stayStartDate) >= start ? new Date(person.stayStartDate) : start;
//         const stayEnd = new Date(person.stayEndDate) <= end ? new Date(person.stayEndDate) : end;
//         const days = (stayEnd - stayStart) / (1000 * 60 * 60 * 24) + 1;
//         return {
//             ...person,
//             daysStayed: days > 0 ? days : 0,
//         };
//     });

//     const totalStayedDays = daysStayed.reduce((acc, person) => acc + person.daysStayed, 0);

//     const results = daysStayed.map(person => ({
//         ...person,
//         share: person.daysStayed > 0 ? (person.daysStayed / totalStayedDays) * totalAmount : 0,
//     }));

//     return results;
// };
// src/utils/calculateSplit.js
export const calculateSplit = (people, startDate, endDate, totalAmount) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const daysStayed = people.map(person => {
        const stayStart = new Date(person.stayStartDate) >= start ? new Date(person.stayStartDate) : start;
        const stayEnd = new Date(person.stayEndDate) <= end ? new Date(person.stayEndDate) : end;
        const days = (stayEnd - stayStart) / (1000 * 60 * 60 * 24) + 1;
        return {
            ...person,
            daysStayed: days > 0 ? days : 0,
        };
    });

    const totalStayedDays = daysStayed.reduce((acc, person) => acc + person.daysStayed, 0);

    const results = daysStayed.map(person => ({
        ...person,
        percentageOfTotalDays: person.daysStayed > 0 ? (person.daysStayed / totalStayedDays) * 100 : 0,
        share: person.daysStayed > 0 ? (person.daysStayed / totalStayedDays) * totalAmount : 0,
    }));

    return results;
};
