import {profileAPI} from "../api/api";

const add_post = "ADD-POST";
const update_new_post_text = "UPDATE-POST-TEXT";
const set_user_profile = "SET-USER-PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you", likes: "12" },
        { id: 2, message: "It's my first post", likes: "11" }
    ],
    newPostText: "hey! Ho! Let's go!",
    userProfile: null,
};
let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };
        }
        case update_new_post_text: {
            return { ...state,
                newPostText: action.postText,  }
        }
        case set_user_profile: {
            return { ...state, userProfile: action.userProfile }
        }
        default:
            return state;
    }
}
export let addPost = () => {
    return { type: add_post }
};
export let updatePostText = (text) => {
    return {
        type: update_new_post_text, postText: text,
    }
};
export let setUserProfile = (userProfile) => {
    return { type: set_user_profile, userProfile}
}

export let getProfile = (userId)=>{
    return (dispatch)=>{
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}
export default profileReducer;