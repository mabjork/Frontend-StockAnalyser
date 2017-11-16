import React from 'react';
import CurrencyPreview from "./CurrencyPreview"
const CurrencyList = props => {
    if(props.currencies != null){
        return(
            <div className="container">
                <h2>Valutaer</h2>
                <table className="table table-striped">
                    <thead className="thead" style={{background: '#2c3e50', color:"#FFF"}}>
                    <tr>
                        <th>Symbol</th>
                        <th>Navn</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.currencies.map(currency => {
                            return (
                                <CurrencyPreview currency={currency} key={currency.id}/>);
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return (
            <div></div>
        )
    }

};

export default CurrencyList;