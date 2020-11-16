import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.ava} src="https://i.pinimg.com/736x/14/87/87/1487872e7981df7dfd22ffe94a8b1985.jpg" />
            <div>{props.message}</div>
            <div>like {props.likes}</div>
        </div>
    );
}

export default Post;