import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    useEffect(() => {
        console.log(budget, "budget")
        alert(`The value cannot reduce the budget more than spending  `)
    }, [newBudget])
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;