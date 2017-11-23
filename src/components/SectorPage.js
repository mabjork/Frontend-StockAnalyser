import React from "react"
import {connect} from "react-redux"
import {equityActions} from "../actions/equityActions";
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar,ResponsiveContainer,Cell} from "recharts"
import { Button, ButtonGroup, ButtonToolbar,Collapse, CardBody, Card  } from 'reactstrap';

class SectorPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {interval:1}
    }

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(equityActions.fetchSectorData())
    }
    onIntervalButtonClick(newInterval){
        this.setState({interval:newInterval});

    }

    render(){
        console.log(this.props.sectorData);
        if (this.props.sectorData != null){
            const keys = Object.keys(this.props.sectorData);
            const data = transformData(this.props.sectorData[keys[this.state.interval]]);
            console.log(data);
            if(data != null){
                return (
                    <div className="container" style={{height:"100%"}}>
                        <div className="row align-content-center justify-content-center" style={{marginTop:"5vh"}}>
                            <ButtonGroup>
                                <Button active={this.state.interval === 1} onClick={() => this.onIntervalButtonClick(1)}>Realtime</Button>{' '}
                                <Button active={this.state.interval === 2} onClick={() => this.onIntervalButtonClick(2)}>1 Day</Button>{' '}
                                <Button active={this.state.interval === 3} onClick={() => this.onIntervalButtonClick(3)}>5 Day</Button>{' '}
                                <Button active={this.state.interval === 4} onClick={() => this.onIntervalButtonClick(4)}>1 Month</Button>{' '}
                                <Button active={this.state.interval === 5} onClick={() => this.onIntervalButtonClick(5)}>3 Month</Button>{' '}
                                <Button active={this.state.interval === 6} onClick={() => this.onIntervalButtonClick(6)}>Year to now</Button>{' '}
                                <Button active={this.state.interval === 7} onClick={() => this.onIntervalButtonClick(7)}>1 Year</Button>{' '}
                                <Button active={this.state.interval === 8} onClick={() => this.onIntervalButtonClick(8)}>3 Year</Button>{' '}
                                <Button active={this.state.interval === 9} onClick={() => this.onIntervalButtonClick(9)}>5 Year</Button>{' '}
                                <Button active={this.state.interval === 10} onClick={() => this.onIntervalButtonClick(10)}>10 Year</Button>
                            </ButtonGroup>
                        </div>
                        <div className="row align-content-center justify-content-center" style={{marginTop:"5vh"}}>
                            <ResponsiveContainer width="90%" height={600}>
                                <BarChart  data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis dataKey="value"/>
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value">
                                        {
                                            data.map((entry, index) => {
                                                const color = entry.value > 0 ? "green" : "red";
                                                return <Cell fill={color} />;
                                            })
                                        }
                                    </Bar>

                                </BarChart>
                            </ResponsiveContainer>

                        </div>

                    </div>
                );
            }
        }
        else{
            return (
                <div>

                </div>
            );
        }


    }
}

function mapStateToProps(state) {
    return {
        sectorData:state.equity.sectorData
    }
}
function transformData(body) {
    const dataList = [];
    for(let item in body){
        dataList.push({name:item,value:parseFloat(body[item].replace("%",""))})
    }
    console.log(dataList);
    return dataList
}
export default connect(mapStateToProps)(SectorPage)