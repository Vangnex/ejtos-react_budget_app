import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currentCurrency, setCurrentCurrency] = useState(currency);

    const changeCurrency = (value) => {
        setCurrentCurrency(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currentCurrency,
        });
    };

    return (
        <div>
            <select value={currency} className="custom-select bg-success text-dark bg-opacity-50" id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$" name="$">$ Dollar</option>
                <option value="£" name="£">£ Pound</option>
                <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
