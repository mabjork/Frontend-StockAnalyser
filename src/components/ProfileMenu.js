import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle ,DropdownItem} from 'reactstrap';
import PersonIcon from "react-icons/lib/md/person"
import { connect } from 'react-redux'

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <div className="" >
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="div"
                        onClick={this.toggle}
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >

                        <PersonIcon size={40} color="white"/>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>{this.props.username}</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem disabled>Settings</DropdownItem>
                        <DropdownItem>Help</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Log-out</DropdownItem>
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