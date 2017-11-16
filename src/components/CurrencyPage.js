import React from "react";
import CurrencyList from "./CurrencyList"
import { connect } from 'react-redux'
import {currencyActions} from "../actions/currencyActions";
import UltimatePagination from "react-ultimate-pagination-bootstrap-4"

class CurrencyPage extends React.Component {
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
        dispatch(currencyActions.fetchDigitalCurrencyPage(this.state.page,20))
    }
    onPageChange(page) {
        this.setState({page});
        console.log(page);
        const {dispatch} = this.props;
        dispatch(currencyActions.fetchDigitalCurrencyPage(page,20))
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="container-fluid justify-content-center" style={{marginTop:"5vh"}}>
                        <CurrencyList currencies={this.props.currencies}/>
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
    return{
        currencies:state.currency.currencies
    };
}
export default connect(mapStateToProps)(CurrencyPage)