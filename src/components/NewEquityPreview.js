import React from 'react';

import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect} from 'react-redux';
import {store} from "../store"
import {equityConstants} from "../constants/equityConstants";
import {equityActions} from "../actions/equityActions";
import  AreaChart from "react-icons/lib/fa/area-chart"
import EmptyStar from "react-icons/lib/fa/star-o"
import FullStar from "react-icons/lib/fa/star"
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class NewEquityPreview extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritted:false,collapse:false}
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
        this.setState({collapse:newValue})
        event.preventDefault();
        console.log("lolololo");

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
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
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
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
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