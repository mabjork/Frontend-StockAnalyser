
import React from "react"
import {Button} from "reactstrap"

const EquityListInfo = (props) => {
    const equity = props.equity;

    return(
        <div className="row">
            <div className="col">
                <div className="row">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ligula sem. Duis ac facilisis justo. Mauris tincidunt neque dolor, at vehicula risus posuere ut. Nulla sed dui condimentum, congue erat sed, tempus erat. Donec eget porttitor velit. Donec viverra risus massa, in cursus dolor blandit auctor. Duis bibendum magna augue, a malesuada libero commodo nec.
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {equity.price}
                </div>
                <div className="row">
                    <div className="row">
                        <Button>Info side</Button>
                    </div>
                    <div className="row">
                        <Button>Pris side</Button>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Button>Kjøp</Button>
                        </div>
                        <div className="col">
                            <Button>Selg</Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default EquityListInfo;