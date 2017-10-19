import React from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer,AreaChart,Area } from 'recharts';
import { connect } from 'react-redux'
import agent from "../agent";
import { Link } from 'react-router-dom';

class GraphPage extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.selectedEquity)
    }
    componentWillMount() {
    }
    render(){
        const data = this.props.data;
        console.log(data);
        return(
            <div className="container">
                <div className="row justify-content-center" style={{marginBottom:"10vh"}}>
                    <Link className="text-dark" to={`/equities/${this.props.selectedEquity.symbol}/info`}><h3>{this.props.selectedEquity.name}</h3></Link>
                </div>
                <div className="row justify-content-center">
                    <AreaChart  data={data} height={400} width={600}>
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <Tooltip />
                        <Legend />
                        <XAxis dataKey="time" />
                        <YAxis dataKey="value"/>
                    </AreaChart>

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