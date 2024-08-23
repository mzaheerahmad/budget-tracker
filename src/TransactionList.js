import React from 'react';

function TransactionList({ transactions }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Transaction History</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id} className={`flex justify-between py-2 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        <span>{transaction.description}</span>
                        <span>${transaction.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
