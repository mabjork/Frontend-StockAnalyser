import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect} from 'react-redux';
import {store} from "../store"
import {history} from "../helpers/history";
import {equityConstants} from "../constants/equityConstants";

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';


const EquityPreview = props => {
    const equity = props.equity;
    const favoritted = equity.favorited ?
        FAVORITED_CLASS: NOT_FAVORITED_CLASS;
    const handleClick = ev => {
    };

    return (
        <tr onClick={handleClick(equity)}>
            <th><Link to={`/equities/${equity.symbol}`} className="text-dark">{equity.symbol}</Link></th>
            <th>{equity.name}</th>
            <th>{equity.sector}</th>
        </tr>
    );

};

export default EquityPreview;