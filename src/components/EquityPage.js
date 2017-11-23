import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import EquityList from "./EquityList";
import {equityActions} from "../actions/equityActions";
import ReactPaginate from 'react-paginate';
import UltimatePagination from "react-ultimate-pagination-bootstrap-4"
import NewEquityList from "./NewEquityList";

class EquityPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            total: 10
        };
        this.onPageChange = this.onPageChange.bind(this);
    }
    componentWillMount(){

        const {dispatch} = this.props;
        dispatch(equityActions.fetchEquitiesPage(this.state.page,20))
    }
    onPageChange(page) {
        this.setState({page});
        console.log(page);
        const {dispatch} = this.props;
        dispatch(equityActions.fetchEquitiesPage(page,20))
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="container-fluid justify-content-center" style={{marginTop:"5vh"}}>
                        <NewEquityList equities={this.props.equities}/>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center" >
                    <UltimatePagination
                        currentPage={this.state.page}
                        totalPages={this.state.total}
                        onChange={this.onPageChange}
                    />
                </div>

            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        equities:state.equity.equities
    };
}
export default connect(mapStateToProps)(EquityPage)