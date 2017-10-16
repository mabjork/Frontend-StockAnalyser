import React from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis } from 'recharts';
import { connect } from 'react-redux'
import agent from "../agent";


class GraphPage extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.selectedEquity)


    }
    componentWillMount() {
    }
    render(){
        const data = this.props.data;
        return(
            <LineChart width={600} height={400} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value"/>
            </LineChart>
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