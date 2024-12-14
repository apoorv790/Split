// src/utils/calculateItemSplit.js
export const calculateItemSplit = (people, totalAmount, deliveryCharge, serviceTax) => {
    const itemTotal = people.reduce((acc, person) => acc + person.itemPrice, 0);
    const additionalCharges = deliveryCharge + serviceTax;

    const results = people.map(person => {
        const itemShare = person.itemPrice;
        const additionalShare = (person.itemPrice / itemTotal) * additionalCharges;
        const totalShare = itemShare + additionalShare;
        return {
            ...person,
            itemShare,
            additionalShare,
            totalShare,
        };
    });

    return results;
};
