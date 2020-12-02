import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainerAJAX extends React.Component {
    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(response => {
            this.props.setUserData(response.data.data)
        })
    }
    render() {
        return <Header auth={this.props.auth}/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => dispatch({type: 'SET-USER-DATA', data: data})
    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAJAX)

export default HeaderContainer;