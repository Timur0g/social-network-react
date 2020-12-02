import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class LoginContainerClass extends React.Component {
    render() {
        return <Login login={this.props.auth.login}/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainerClass)

export default LoginContainer;