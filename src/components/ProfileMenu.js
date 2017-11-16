import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle ,DropdownItem} from 'reactstrap';
import PersonIcon from "react-icons/lib/md/person"
import { connect } from 'react-redux'
import {userActions} from "../actions/userActions";
import { history } from '../helpers/history';

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.dropDownItemClick = this.dropDownItemClick.bind(this);

    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    dropDownItemClick(name){
        console.log("lololololololol");
        switch (name){
            case "LogOut":
                userActions.logout();
                history.push('/login');
                return;
            case "MyPage":
                history.push("/user/mypage");
                return;
            case "Settings":
                history.push("/user/lol/settings");
                return;
            case "Help":
                history.push("/help");
                return;
        }
    }
    render() {
        return (
            <div className="" >
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="div"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}>

                        <PersonIcon size={40} color="white"/>

                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>{this.props.username}</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem onClick={() => this.dropDownItemClick("MyPage")}>My Page</DropdownItem>
                        <DropdownItem onClick={() => this.dropDownItemClick("Settings")}>Settings</DropdownItem>
                        <DropdownItem onClick={() => this.dropDownItemClick("FAQ")}>FAQ</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem onClick={() => this.dropDownItemClick("LogOut")}>Log-out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        username:state.auth.user.username
    }
}
export default connect(mapStateToProps)(ProfileMenu);