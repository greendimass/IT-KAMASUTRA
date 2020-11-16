import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    getUsersThunkCreator
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    }
};

export default compose(
    connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, getUsers: getUsersThunkCreator
}),
    withAuthRedirect,
    )(UsersAPIContainer);