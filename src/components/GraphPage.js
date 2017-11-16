import React from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer,AreaChart,Area } from 'recharts';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {equityActions} from "../actions/equityActions"
import { Button, ButtonGroup, ButtonToolbar,Collapse, CardBody, Card  } from 'reactstrap';

class GraphPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {selectedEquity:this.props.selectedEquity,data:this.props.data,datafunction:this.props.match.params.datafunction,interval:15};
        this.onIntervalButtonClick = this.onIntervalButtonClick.bind(this);
    }
    componentWillMount() {
        const symbol = this.props.match.params.symbol;
        const dataFunction = this.props.match.params.datafunction;

        const {dispatch} = this.props;
        dispatch(equityActions.fetchEquityData(symbol,dataFunction,this.state.interval+"min"));

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(this.state.datafunction !== nextProps.match.params.datafunction){
            this.state = {selectedEquity:nextProps.selectedEquity,data:nextProps.data,datafunction:nextProps.match.params.datafunction};
            const symbol = nextProps.match.params.symbol;
            const dataFunction = nextProps.match.params.datafunction;

            const {dispatch} = this.props;
            dispatch(equityActions.fetchEquityData(symbol,dataFunction,this.state.interval+"min"));
        }
    }
    componentWillUnmount(){
        const {dispatch} = this.props;
        dispatch(equityActions.unloadData());
    }
    onIntervalButtonClick(interval){
        this.setState({
            interval:interval
        });
        const symbol = this.props.match.params.symbol;
        const dataFunction = this.props.match.params.datafunction;

        const {dispatch} = this.props;
        dispatch(equityActions.fetchEquityData(symbol,dataFunction,interval+"min"));
    }
    render(){
        const data = this.props.data;
        return(
            <div className="container">
                <div className="row justify-content-center" style={{marginBottom:"5vh"}}>
                    <Link className="text-dark" to={`/equities/${this.props.selectedEquity.symbol}/info`}><h3>{this.props.selectedEquity.name}</h3></Link>
                </div>

                <div className="row justify-content-center" style={{marginBottom:"3vh"}}>
                    <Collapse isOpen={this.state.datafunction === "TIME_SERIES_INTRADAY"}>
                        <ButtonGroup>
                            <Button active={this.state.interval === 1} onClick={() => this.onIntervalButtonClick(1)}>1min</Button>{' '}
                            <Button active={this.state.interval === 5} onClick={() => this.onIntervalButtonClick(5)}>5min</Button>{' '}
                            <Button active={this.state.interval === 15} onClick={() => this.onIntervalButtonClick(15)}>15min</Button>{' '}
                            <Button active={this.state.interval === 30} onClick={() => this.onIntervalButtonClick(30)}>30min</Button>{' '}
                            <Button active={this.state.interval === 60} onClick={() => this.onIntervalButtonClick(60)}>60min</Button>
                        </ButtonGroup>
                    </Collapse>
                </div>
                <div className="row justify-content-center">
                    <ResponsiveContainer height={600} width="90%">
                        <AreaChart  data={data}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>>
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <Tooltip />
                            <Legend />
                            <XAxis dataKey="time" />
                            <YAxis dataKey="value"/>
                        </AreaChart>
                    </ResponsiveContainer>


                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return{
        selectedEquity:state.equity.selectedEquity,
        data:state.equity.equityData
    };
}
export default connect(mapStateToProps)(GraphPage)