import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [ newBudget, setNewBudget ] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const submitEvent = () => {
        if (newBudget < totalExpenses) {
            alert("The budget cannot be reduced lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{ marginLeft: '1rem' }}></input>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '7rem', marginTop: '1rem' }}>
                Set budget
            </button>
        </div>
    )
}

export default Budget;
