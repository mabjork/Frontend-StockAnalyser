import React from 'react';
import { Link } from 'react-router-dom';
import {store} from "../store"
import {currencyActions} from "../actions/currencyActions";
import  AreaChart from "react-icons/lib/fa/area-chart"

const CurrencyPreview = props => {
    const currency = props.currency;

    const handleClick = () => {
        store.dispatch(currencyActions.setSelected(currency))

    };

    return (
        <tr>
            <th>{currency.symbol}</th>
            <th>{currency.name}</th>
            <th>{currency.type}</th>
            <th><Link onClick={handleClick} to={`/currencies/${currency.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart/></Link></th>
        </tr>
    );

};

export default CurrencyPreview;