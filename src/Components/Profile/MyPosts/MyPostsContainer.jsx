import React from 'react';
import { updatePostText, addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updatePostText})(MyPosts);

export default MyPostsContainer;
