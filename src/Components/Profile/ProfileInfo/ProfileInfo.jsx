import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.userProfile) { return <Preloader/>};
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.bar} src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" />
            </div>

            <div className={classes.descriptinBlock}>
                <img src={props.userProfile.photos.large} />
                <div>Name: {props.userProfile.fullName}</div>
                <div>{props.userProfile.lookingForAJobDescription}</div>
                <div>gitHub: {props.userProfile.contacts.github}</div>
                <div>vk: {props.userProfile.contacts.vk}</div>
                <div>facebook: {props.userProfile.contacts.facebook}</div>
                <div></div></div>
        </div>
    );
}

export default ProfileInfo;