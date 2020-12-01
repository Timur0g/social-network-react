import React from 'react';
import Axios from "axios";
import { connect } from "react-redux";
import Users from './Users';

class UsersContainerAJAX extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${this.props.page}`).then(response => {
            this.props.setTotalCount(response.data.totalCount)
            this.props.setUser(response.data.items)
        })
    }

    changePage(page) {
        console.log(this);
        
        this.setPage(page)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${page}`).then(response => {
            this.setTotalCount(response.data.totalCount)
            this.setUser(response.data.items)
        })
    }
    render() {
        var pages = [];
        for (let i = 1; i < Math.ceil(this.props.totalCount / 10); i++) {pages.push(i)}
        return <Users 
        users={this.props.users}
        page={this.props.page}
        pages={pages} 
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        changePage={this.changePage}
        setTotalCount={this.props.setTotalCount}
        setUser={this.props.setUser}
        setPage={this.props.setPage}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        page: state.users.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch({type: 'FOLLOW', id: id}),
        unfollow: (id) => dispatch({type: 'UNFOLLOW', id: id}),
        setUser: (user) => dispatch({type: 'SET-USER', user: user}),
        setTotalCount: (count) => dispatch({type: 'SET-TOTAL-COUNT', count: count}),
        setPage: (page) => dispatch({type: 'SET-PAGE', page: page}),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAJAX);
export default UsersContainer;