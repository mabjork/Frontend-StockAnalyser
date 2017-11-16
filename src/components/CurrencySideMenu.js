import React from 'react';
import PropTypes from 'prop-types';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import {history} from "../helpers/history"

const CurrencySideMenu = (props) => {
    let symbol = props.symbol;
    let path = "/currencies/"+symbol+"/";
    return (
        <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
            <SideNav highlightColor='#000000' highlightBgColor='#00bcd4' defaultSelected='DIGITAL_CURRENCY_INTRADAY'
                     onItemSelection={(id, parent) => {
                         history.push(path + id)
                     }}>
                <Nav id='DIGITAL_CURRENCY_INTRADAY'>

                    <NavText> Intraday</NavText>
                </Nav>
                <Nav id='DIGITAL_CURRENCY_DAILY'>

                    <NavText> Daily </NavText>
                </Nav>
                <Nav id='DIGITAL_CURRENCY_WEEKLY'>

                    <NavText> Weekly </NavText>
                </Nav>
                <Nav id='DIGITAL_CURRENCY_MONTHLY'>

                    <NavText> Monthly </NavText>
                </Nav>


            </SideNav>
        </div>
    );

};

export default CurrencySideMenu;