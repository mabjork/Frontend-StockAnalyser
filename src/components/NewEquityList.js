import React from 'react';
import NewEquityPreview from "./NewEquityPreview"
const NewEquityList = props => {


    if(props.equities != null){
        return(
            <div className="container">
                <h2>Aksjer</h2>
                <div className="list-group" >
                    <div className="list-group-item" style={{background: '#2c3e50', color:"#FFF"}}>
                        <div className="row">
                            <div className="col">Symbol</div>
                            <div className="col">Navn</div>
                            <div className="col">Sektor</div>
                            <div className="col">Graf</div>
                            <div className="col">Favoritt</div>
                        </div>

                    </div>
                    { props.equities.map(equity => {
                        return (
                            <NewEquityPreview equity={equity} key={equity.id}/>);
                    })
                    }

                </div>
            </div>
        )
    }else {
        return(
            <div >

            </div>
        )
    }


};

export default NewEquityList;