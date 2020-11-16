import React from 'react';
import classes from "./SideBarItem.module.css";


const SideBarItem = (props) => {
    return (
        <div className={classes.avaFriend}>
            <img src={props.ava} />
            <div>{props.name}</div>
        </div>
    );
}

export default SideBarItem;