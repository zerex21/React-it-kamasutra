import React from "react";
import { updatePostCreator ,addPostCreator,  } from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {
  /* debugger */
  let state = props.store.getState()

  let onAddPost = () =>{
    props.store.dispatch(addPostCreator());
  }

  let onPostChange = (text) =>{
    props.store.dispatch(updatePostCreator(text))
  }

  return (
    <MyPosts posts={state.profilePage.posts} newPostText = {state.profilePage.newPostText} updateNewPostText= {onPostChange} addPost={onAddPost}/>
  );
};

export default MyPostsContainer;
