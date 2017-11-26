import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import EquityList from "./EquityList";
import {equityActions} from "../actions/equityActions";
import ReactPaginate from 'react-paginate';
import UltimatePagination from "react-ultimate-pagination-bootstrap-4"
import NewEquityList from "./NewEquityList";
import SearchIcon from "react-icons/lib/fa/search"
import { Button } from 'reactstrap';

class EquityPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            total: Math.floor(props.count/20),
            searchValue:""
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
        //dispatch(equityActions.fetchEquitiesPage(page,20))
        dispatch(equityActions.searchEquities(this.state.searchValue,page))
    }

    onSearchChanged(event){
        this.setState({searchValue:event.target.value});
        console.log(event.target.value);
        clearTimeout(timeout);
        const {dispatch} = this.props;
        const value = event.target.value;
        const page = this.state.page
        // Make a new timeout set to go off in 800ms
        timeout = setTimeout(function () {

            dispatch(equityActions.searchEquities(value,page))
        }, 500);

    }

    render(){

        return (

            <div className="container">
                <div className="row" style={{marginTop:"5vh"}}>
                    <div className="col justify-content-stretch">
                        <h2>Aksjer</h2>
                    </div>
                    <div className="col ml-auto">
                        <div className="input-group">
                            <input className="form-control"
                                   placeholder="I can help you to find anything you want!" value={this.state.searchValue} onChange={(event) => this.onSearchChanged(event)}/>
                            <div className="input-group-addon" style={{cursor:"pointer"}}>
                                <SearchIcon/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="container-fluid justify-content-center">

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
var timeout = null;

function mapStateToProps(state) {
    return {
        equities:state.equity.equities,
        count:state.metadata.data.numStocks
    };
}
export default connect(mapStateToProps)(EquityPage)