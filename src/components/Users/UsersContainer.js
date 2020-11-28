import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch({type: 'FOLLOW', id: id}),
        unfollow: (id) => dispatch({type: 'UNFOLLOW', id: id}),
        setUser: (user) => dispatch({type: 'SET-USER', user: user})
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;