import React from "react";
/* import { updateNewPostText } from "../../../../redux/state"; */
/* import { rerenderTree } from "../../../../render"; */
import sMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts.map(item=> <Post key = {item.id} message={item.message} like={item.like} />)

  let newPostElement = React.createRef()

  let addPost = () =>{
    props.addPost();
   /*  newPostElement.current.value=''; */
    /* rerenderTree() */
  }

  let onPostChange = () =>{
    let text = newPostElement.current.value
    props.updateNewPostText(text)
    
  }

  return (
    <div className={sMyPosts.postsBlock}>
      Myposts
      <div className={sMyPosts.sendMessage}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
          <button >Remove</button>
        </div>
      </div>
      <div className={sMyPosts.posts}>
         {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
