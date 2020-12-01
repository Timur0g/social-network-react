import { connect } from "react-redux";
import Users from "./Users";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;