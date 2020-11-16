import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.userProfile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
});

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)