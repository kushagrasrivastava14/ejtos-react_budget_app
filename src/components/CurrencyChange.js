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
<option value="Pound" name="pound">£ </option>
<option value="Euro" name="euro">€</option>
<option value="Ruppee" name="ruppee">₹ </option>

  </select> {currency} </div>
    )
}

export default CurrencyChange;