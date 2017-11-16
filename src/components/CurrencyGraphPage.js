import React from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer,AreaChart,Area } from 'recharts';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {currencyActions} from "../actions/currencyActions";
import { Button, ButtonGroup, ButtonToolbar,Collapse, CardBody, Card  } from 'reactstrap';

class CurrencyGraphPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {selectedCurrency:this.props.selectedCurrency,  data:this.props.data,  datafunction:this.props.match.params.datafunction,  market:"CNY"};

    }
    componentWillMount() {
        const symbol = this.props.match.params.symbol;
        const dataFunction = this.props.match.params.datafunction;

        const {dispatch} = this.props;
        dispatch(currencyActions.getDigitalCurrencyData(symbol,dataFunction,this.state.market));

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(this.state.datafunction !== nextProps.match.params.datafunction){

            const symbol = nextProps.match.params.symbol;
            const dataFunction = nextProps.match.params.datafunction;
            this.state = {selectedCurrency:this.props.selectedCurrency,data:nextProps.data,datafunction:nextProps.match.params.datafunction,market:"CNY"};
            const {dispatch} = this.props;
            dispatch(currencyActions.getDigitalCurrencyData(symbol,dataFunction,this.state.market));
        }
    }
    componentWillUnmount(){
        const {dispatch} = this.props;
        //dispatch();
    }

    render(){
        const data = this.props.data;
        return(
            <div className="container">
                <div className="row justify-content-center" style={{marginBottom:"5vh"}}>
                    <Link className="text-dark" to={`/currencies/${this.props.selectedCurrency.symbol}/info`}><h3>{this.props.selectedCurrency.name}</h3></Link>
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
        selectedCurrency:state.currency.selectedCurrency,
        data:state.currency.currencyData
    };
}
export default connect(mapStateToProps)(CurrencyGraphPage)