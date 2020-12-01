import React from 'react';
import Axios from "axios";
import { connect } from "react-redux";
import Users from './Users';

const Preloader = () => {
    return (
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}

class UsersContainerAJAX extends React.Component {
    componentDidMount() {
        this.props.activePreloader(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${this.props.page}`).then(response => {
            this.props.activePreloader(false)
            this.props.setTotalCount(response.data.totalCount)
            this.props.setUser(response.data.items)
        })
    }

    changePage(page) {
        this.activePreloader(true)
        this.setPage(page)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${page}`).then(response => {
            this.activePreloader(false)
            this.setTotalCount(response.data.totalCount)
            this.setUser(response.data.items)
        })
    }
    render() {
        var pages = [];
        for (let i = 1; i < Math.ceil(this.props.totalCount / 10); i++) { pages.push(i) }
        return <>
        {this.props.preloader ? <Preloader /> : null}
        <Users
            users={this.props.users}
            page={this.props.page}
            pages={pages}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            changePage={this.changePage}
            setTotalCount={this.props.setTotalCount}
            setUser={this.props.setUser}
            setPage={this.props.setPage}
            activePreloader={this.props.activePreloader}
        />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        totalCount: state.users.totalCount,
        page: state.users.page,
        preloader: state.users.preloader
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch({ type: 'FOLLOW', id: id }),
        unfollow: (id) => dispatch({ type: 'UNFOLLOW', id: id }),
        setUser: (user) => dispatch({ type: 'SET-USER', user: user }),
        setTotalCount: (count) => dispatch({ type: 'SET-TOTAL-COUNT', count: count }),
        setPage: (page) => dispatch({ type: 'SET-PAGE', page: page }),
        activePreloader: (boolean) => dispatch({ type: 'ACTIVE-PRELOADER', boolean: boolean }),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAJAX);
export default UsersContainer;