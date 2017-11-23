import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect} from 'react-redux';
import {store} from "../store"
import {history} from "../helpers/history";
import {equityConstants} from "../constants/equityConstants";
import {equityActions} from "../actions/equityActions";
import  AreaChart from "react-icons/lib/fa/area-chart"
import EmptyStar from "react-icons/lib/fa/star-o"
import FullStar from "react-icons/lib/fa/star"
import { Collapse, Button, CardBody, Card } from 'reactstrap';




const EquityPreview = props => {

    const equity = props.equity;
    let favoritted = equity.favorited;
    let open = false;
    const handleClick = () => {
        store.dispatch(equityActions.setSelected(equity))
    };
    const handleSubscriptionChange = () => {
        console.log(props);
        const {dispatch} = props;
        if(favoritted){
            dispatch(equityActions.unsubscribe(equity.symbol,props.username));
            favoritted = false;
        }else{
            dispatch(equityActions.subscribe(equity.symbol,props.username));
            favoritted = true;
        }
        console.log(favoritted)
    };
    const rowClicked = () =>{
        console.log("lolololol");
        open = !open
    };
    if(favoritted){

        return (
            <tr onClick={() => rowClicked()}>
                <td>{equity.symbol}</td>
                <td>{equity.name}</td>
                <td>{equity.sector}</td>
                <td><Link onClick={handleClick} to={`/equities/${equity.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart size={28}/></Link></td>
                <td style={{cursor:"pointer"}}><FullStar onClick={handleSubscriptionChange} size={28} color="gold"/></td>
            </tr>

        );
    }
    else{

        return (

                <tr onClick={() => rowClicked()}>
                    
                    <td>{equity.symbol}</td>
                    <td>{equity.name}</td>
                    <td>{equity.sector}</td>
                    <td><Link onClick={handleClick} to={`/equities/${equity.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart size={28}/></Link></td>
                    <td style={{cursor:"pointer"}}><EmptyStar onClick={handleSubscriptionChange} size={28} color="gold"/></td>
                </tr>

        );
    }


};
function mapStateToProps(state){
    return {
        username:state.auth.user.username
    }
}

export default connect(mapStateToProps)(EquityPreview);