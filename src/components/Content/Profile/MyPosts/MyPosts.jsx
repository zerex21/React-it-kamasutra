import React from "react";
import sMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts.map(item=> <Post key = {item.id} message={item.message} like={item.like} />)

  let newPostElement = React.createRef()

  let addPost = () =>{
    let text = newPostElement.current.value;
    console.log(text)
  }

  return (
    <div className={sMyPosts.postsBlock}>
      Myposts
      <div className={sMyPosts.sendMessage}>
        <textarea ref={newPostElement}></textarea>
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
