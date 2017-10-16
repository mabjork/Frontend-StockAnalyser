import React from 'react';
import PropTypes from 'prop-types';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import {history} from "../helpers/history"

const SideMenu = (props) => {
    let symbol = props.symbol;
    let path = "/equities/"+symbol+"/";
    return (
        <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
            <SideNav highlightColor='#000000' highlightBgColor='#00bcd4' defaultSelected='TIME_SERIES_INTRADAY'
                     onItemSelection={(id, parent) => {
                         history.push(path + id)
                     }}>
                <Nav id='TIME_SERIES_INTRADAY'>

                    <NavText> Intraday</NavText>
                </Nav>
                <Nav id='TIME_SERIES_DAILY'>

                    <NavText> Daily </NavText>
                </Nav>
                <Nav id='TIME_SERIES_DAILY_ADJUSTED'>

                    <NavText> Daily adjusted</NavText>
                </Nav>
                <Nav id='TIME_SERIES_WEEKLY'>

                    <NavText> Weekly </NavText>
                </Nav>
                <Nav id='TIME_SERIES_WEEKLY_ADJUSTED'>

                    <NavText> Weekly adjusted </NavText>
                </Nav>
                <Nav id='TIME_SERIES_MONTHLY'>

                    <NavText> Monthly </NavText>
                </Nav>


            </SideNav>
        </div>
    );

}

export default SideMenu;