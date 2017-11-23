import React from 'react';
import EquityPreview from "./EquityPreview"
const EquityList = props => {


    if(props.equities != null){
        return(
            <div className="container">
                <h2>Aksjer</h2>
                <table className="table table-striped">
                    <thead className="thead" style={{background: '#2c3e50', color:"#FFF"}}>
                    <tr>
                        <th>Symbol</th>
                        <th>Navn</th>
                        <th>Sektor</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { props.equities.map(equity => {
                        return (
                            <EquityPreview equity={equity} key={equity.id}/>);
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
    }else {
        return(
            <div >

            </div>
        )
    }


};

export default EquityList;