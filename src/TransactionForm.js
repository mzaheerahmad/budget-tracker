import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function TransactionForm({ fetchTransactions }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (description && amount) {
            const { data, error } = await supabase.from('transactions').insert([
                { description, amount: parseFloat(amount), type },
            ]);

            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('Data inserted:', data);
                setDescription('');
                setAmount('');
                fetchTransactions(); // Refresh the list after insertion
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
            <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                    placeholder="Enter description"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                    placeholder="Enter amount"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Type</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            >
                Add Transaction
            </button>
        </form>
    );
}

export default TransactionForm;
