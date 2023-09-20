import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    useEffect(()=>{
        console.log(budget,"budget")
        totalExpenses > budget && alert(`The valuse cannot exceeds remaining funds`)
    },[budget])
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:{currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;