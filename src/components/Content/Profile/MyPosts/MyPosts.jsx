import React from "react";
import sMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {


  let postsElements = props.posts.map(item=> <Post key = {item.id} message={item.message} like={item.like} />)


  let addPost = () =>{
   props.addPost()
  }

  let onPostChange = (e) =>{
    let text = e.target.value
    props.updateNewPostText(text)    
  }

  return (
    <div className={sMyPosts.postsBlock}>
      Myposts
      <div className={sMyPosts.sendMessage}>
        <textarea value={props.newPostText} placeholder='Type...' onChange={onPostChange}></textarea>
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
