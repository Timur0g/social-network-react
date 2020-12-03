import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserData } from '../../redux/reducers/auth-reducer';
import { addPost, changeText, setUserProfile } from '../../redux/reducers/profile-reducer';
import Post from './MyPosts/Post/Post';
import Profile from './Profile';

class ProfileContainerAPI extends React.Component {

    componentDidMount() {

        let userProfileParam = this.props.match.params.userProfile;
        if (!userProfileParam) {

            Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            }).then(response => {
                console.log(response.data.data)
                console.log(this.props.auth.id)
                this.props.setUserData(response.data.data)
                userProfileParam = this.props.auth.id
                Axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userProfileParam).then(response => {
                    this.props.setUserProfile(response.data)
                })
            })
        }else {
            Axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userProfileParam).then(response => {
                this.props.setUserProfile(response.data)
            })
        }
        
    }

    render() {
        return (
            <Profile
                text_area_text={this.props.text_area_text}
                changeText={this.props.changeText}
                posts={this.props.posts}
                userProfile={this.props.userProfile}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        text_area_text: state.profile.text_area_text,
        userProfile: state.profile.userProfile,
        auth: state.auth,
        posts: state.profile.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        changeText: (e) => {
            const value = e.target.value;
            dispatch(changeText(value))
        },
        setUserProfile: (user) => dispatch(setUserProfile(user)),
        setUserData: (data) => dispatch(setUserData(data))
    }
}

const RouterWrapperProfileContainer = withRouter(ProfileContainerAPI)
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(RouterWrapperProfileContainer);

export default ProfileContainer;