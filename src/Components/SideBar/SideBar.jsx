import React from 'react';
import classes from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';


const SideBar = (props) => {
    let friendConstructor = props.friends.map(friend => <SideBarItem
        className={classes.pos}
        name={friend.name}
        ava={friend.ava}
         />);
    return (
        <div className={classes.side}>
            <h2>Friends</h2>
            <div className={classes.friendsBar}>
                <div>{friendConstructor}</div>
            </div>
        </div>
    );
}

export default SideBar;