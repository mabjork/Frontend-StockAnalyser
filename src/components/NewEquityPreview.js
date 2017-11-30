import React from 'react';

import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import {store} from "../store"
import {equityActions} from "../actions/equityActions";
import  AreaChart from "react-icons/lib/fa/area-chart"
import EmptyStar from "react-icons/lib/fa/star-o"
import FullStar from "react-icons/lib/fa/star"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import EquityListInfo from "./EquityListInfo"

class NewEquityPreview extends React.Component {
    constructor(props){
        super(props);
        console.log(props.equity);
        this.state = {favoritted:props.equity.favorited,collapse:false}
    }
    handleSubscriptionChange(event){
        
        event.stopPropagation();
        const {dispatch} = this.props;

        if(this.state.favoritted){
            dispatch(equityActions.unsubscribe(this.props.equity.symbol,this.props.username));
            this.setState({favoritted:false})
        }else{
            dispatch(equityActions.subscribe(this.props.equity.symbol,this.props.username));
            this.setState({favoritted:true})
        }
    }
    handleClick () {
        store.dispatch(equityActions.setSelected(this.props.equity))
    };
    toggleCollapse(event){
        let newValue = !this.state.collapse;
        this.setState({collapse:newValue});
        event.preventDefault();


    }

    render(){
        const equity = this.props.equity;
        if(this.state.favoritted){
            return(
                <div className="list-group-item">
                    <div className="row" onClick={(event) => this.toggleCollapse(event)}>
                        <div className="col">{equity.symbol}</div>
                        <div className="col">{equity.name}</div>
                        <div className="col">{equity.sector}</div>
                        <div className="col"><Link onClick={() => this.handleClick()} to={`/equities/${equity.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart size={28}/></Link></div>
                        <div className="col" style={{cursor:"pointer"}}><FullStar onClick={(event) => this.handleSubscriptionChange(event)} size={22} color="gold"/></div>
                    </div>

                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <EquityListInfo equity={equity}/>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            )
        }
        else{
            return(
                <div className="list-group-item">
                    <div className="row" onClick={(event) => this.toggleCollapse(event)}>
                        <div className="col">{equity.symbol}</div>
                        <div className="col">{equity.name}</div>
                        <div className="col">{equity.sector}</div>
                        <div className="col"><Link onClick={() => this.handleClick()} to={`/equities/${equity.symbol}/TIME_SERIES_INTRADAY`} className="text-dark"><AreaChart size={28}/></Link></div>
                        <div className="col" style={{cursor:"pointer"}}><EmptyStar onClick={(event) => this.handleSubscriptionChange(event)} size={22} color="gold"/></div>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <EquityListInfo equity={equity}/>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            )
        }

    }
}
function mapStateToProps(state){
    return {
        username:state.auth.user.username
    }
}
export default connect(mapStateToProps)(NewEquityPreview);