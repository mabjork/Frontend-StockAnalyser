import React from 'react';
import { connect } from 'react-redux'
import agent from "../agent";
import SideMenu from "./SideMenu";
import GraphPage from "./GraphPage";
import {equityConstants} from "../constants/equityConstants";
import PropTypes from 'prop-types';

class EquityDataPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.EquityData.get(this.props.match.params.symbol)
        ]));
    }

    render(){
        return (
            <div className="row" style={style.customRow}>
                <div className="col-md-auto" style={style.sidemenu}>
                    <SideMenu/>
                </div>
                <div className="col" style={style.dataContainer} >
                    <div className="jumbotron" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <GraphPage data={data} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const data = [
    {
        name:"name1",
        value:10
    },
    {
        name:"name2",
        value:20
    },
    {
        name:"name3",
        value:30
    },
    {
        name:"nam4",
        value:30
    },
    {
        name:"name5",
        value:30
    },
    {
        name:"name6",
        value:30
    },
    {
        name:"name7",
        value:30
    },
    {
        name:"name8",
        value:30
    },
    {
        name:"name9",
        value:30
    },
    {
        name:"name10",
        value:30
    },
    {
        name:"name11",
        value:30
    },
    {
        name:"name12",
        value:30
    },


];
const style = {
    customRow:{
        marginRight:0
    },
    dataContainer:{
        margin:0,
        padding:0,
        overflowX:"hidden"

    },
    sidemenu:{
        margin:0,
        padding:0,
        overflowY: "scroll",
        maxHeight:"92.2vh",

    },

};

function mapStateToProps(state) {
    return {
        equities:state.equity.equities,
    };
}

const mapDispatchToProps = dispatch => ({
    onLoad: (payload,equity) =>
        dispatch({ type: equityConstants.EQUITY_DATA_LOADED, payload,equity }),
    onUnload: () =>
        dispatch({ type: equityConstants.EQUITY_DATA_UNLOADED })
});
export default connect(mapStateToProps,mapDispatchToProps)(EquityDataPage)