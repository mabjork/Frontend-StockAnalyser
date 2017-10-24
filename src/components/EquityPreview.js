import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect} from 'react-redux';
import {store} from "../store"
import {history} from "../helpers/history";
import {equityConstants} from "../constants/equityConstants";
import {equityActions} from "../actions/equityActions";
import  AreaChart from "react-icons/lib/fa/area-chart"

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';


const EquityPreview = props => {
    const equity = props.equity;
    const favoritted = equity.favorited ?
        FAVORITED_CLASS: NOT_FAVORITED_CLASS;
    const handleClick = () => {
        store.dispatch(equityActions.setSelected(equity))
    };

    return (
        <tr>
            <th>{equity.symbol}</th>
            <th>{equity.name}</th>
            <th>{equity.sector}</th>
            <th><Link onClick={handleClick} to={`/equities/${equity.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart size={28}/></Link></th>
        </tr>
    );

};

export default EquityPreview;