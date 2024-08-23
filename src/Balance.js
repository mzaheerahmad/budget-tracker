import React from 'react';

function Balance({ transactions }) {
    const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
    const balance = income - expenses;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
            <h2 className="text-xl font-bold mb-4">Current Balance</h2>
            <p className="text-2xl">${balance.toFixed(2)}</p>
            <div className="flex justify-between mt-4">
                <p className="text-green-600">Income: ${income.toFixed(2)}</p>
                <p className="text-red-600">Expenses: ${expenses.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Balance;
