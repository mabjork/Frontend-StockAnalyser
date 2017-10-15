import React from 'react';
import PropTypes from 'prop-types';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';


const SideMenu = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#000000' highlightBgColor='#00bcd4' defaultSelected='dashboard'>
            <Nav id='dashboard'>

                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales2'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales3'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales4'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales5'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales6'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales20'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales7'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales8'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales9'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales10'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales11'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales12'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales13'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales14'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales15'>

                <NavText> Sales </NavText>
            </Nav>
            <Nav id='sales16'>

                <NavText> Sales </NavText>
            </Nav>


        </SideNav>
    </div>
);


export default SideMenu;