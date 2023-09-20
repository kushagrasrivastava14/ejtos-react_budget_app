import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {

    const { currency } = useContext(AppContext);


    const { dispatch } = useContext(AppContext);

    const handleCurrencyExchange = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div  >   <select className="custom-select" id="inputGroupSelect01"onClick={(e) => { handleCurrencyExchange(e.target.value) }}>
        <option defaultValue>Choose...</option>
        <option value="$" name="dollar"> $</option>
<option value="£" name="pound">£ </option>
<option value="€" name="euro">€</option>
<option value="₹" name="ruppee">₹ </option>

  </select> {currency} </div>
    )
}

export default CurrencyChange;