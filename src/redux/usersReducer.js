import {followedAPI, usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const set_users = "SET_USERS";
const set_current_page = "SET_CURRENT_PAGE";
const set_total_count = "SET_TOTAL_COUNT";
const toggle_is_fetching = "TOGGLE_IS_FETCHING";
const toggle_is_following_in_progress = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case set_users: {
            return {...state, users: [...action.users]}
        }
        case set_current_page: {
            return {...state, currentPage: action.pageNumber}
        }
        case set_total_count: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case toggle_is_fetching: {
            return {...state, isFetching: action.isFetching}
        }
        case toggle_is_following_in_progress: {
            return {
                ...state,
                isFollowingInProgress: action.isFollowing
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}
export let followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export let unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};
export let setUsers = (users) => {
    return {type: set_users, users}
};
export let setCurrentPage = (pageNumber) => {
    return {type: set_current_page, pageNumber}
};
export let setTotalCount = (totalCount) => {
    return {type: set_total_count, totalCount}
};
export let toggleIsFetching = (isFetching) => {
    return {type: toggle_is_fetching, isFetching}
};
export let toggleIsFollowingInProgress = (isFollowing, userId) => {
    return {type: toggle_is_following_in_progress, isFollowing, userId}
};

export const getUsersThunkCreator = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const follow = (userId)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowingInProgress(true, userId));
        followedAPI.followUser(userId).then(data => {
            if (data.resultCode == 0) { dispatch(followSuccess(userId)) }
            dispatch(toggleIsFollowingInProgress(false, userId));
        });
    }
}
export const unfollow = (userId)=>{
    return (dispatch)=>{
        dispatch(toggleIsFollowingInProgress(true, userId));
        followedAPI.unfollowUser(userId).then(data => {
            if (data.resultCode == 0) { dispatch(unfollowSuccess(userId)) }
            dispatch(toggleIsFollowingInProgress(false, userId));
        });
    }
}

export default usersReducer;