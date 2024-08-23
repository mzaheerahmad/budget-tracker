import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Balance from './Balance';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const { data } = await supabase.from('transactions').select('*').order('created_at', { ascending: false });
    setTransactions(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Budget Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
