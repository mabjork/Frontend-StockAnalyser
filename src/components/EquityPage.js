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
        dispatch(equityActions.fetchEquitiesPage(page,20))
    }
    onSearchChanged(event){
        this.setState({searchValue:event.target.value});
        console.log(event.target.value);
        const {dispatch} = this.props;
        dispatch(equityActions.searchEquities(event.target.value))
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


function mapStateToProps(state) {
    return {
        equities:state.equity.equities,
        count:state.metadata.data.numStocks
    };
}
export default connect(mapStateToProps)(EquityPage)