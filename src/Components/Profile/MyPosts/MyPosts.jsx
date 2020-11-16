import React from 'react';
import classes from "./MyPosts.module.css";
import Post from './Post/Post';
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {
    let postConstructor = props.posts.map(post => <Post message={post.message} likes={post.likes} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onValueChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    };
    return (

        <div className={classes.control}><h2>My posts</h2>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onValueChange} />
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            {postConstructor}
        </div >
    );
}

export default MyPosts;