import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {userActions} from "../actions/userActions"


class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.props.dispatch(userActions.logout());
        this.state = {
            username: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name,value} = e.target;

        this.setState({[name]: value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted:true});
        const {username,password} = this.state;
        const {dispatch} = this.props;
        if (username && password){
            dispatch(userActions.login(username,password))
        }
    }
    render(){
        const {username,password,submitted} = this.state;
        return (
            <div className="jumbotron">
                <div className="row justify-content-md-center">
                    <div className="col-sm-6 ">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Username:</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                <div className="help-block text-danger">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                <div className="help-block text-danger">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark">Login</button>
                                <Link to="/register" className="btn btn-link text-dark">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }

}
function mapStateToProps(state) {
    return {
    };
}
export default connect(mapStateToProps)(LoginPage);