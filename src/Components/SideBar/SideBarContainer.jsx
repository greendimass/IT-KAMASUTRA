import React from 'react';
import classes from "./SideBar.module.css";
import SideBarItem from './SideBarItem/SideBarItem';
import { connect } from 'react-redux';
import SideBar from './SideBar';



let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends,
    }
}

const SideBarContainer = connect(mapStateToProps)(SideBar);


export default SideBarContainer;