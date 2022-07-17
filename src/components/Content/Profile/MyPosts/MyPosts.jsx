import sMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.posts.map(item=> <Post key = {item.id} message={item.message} like={item.like} />)

  return (
    <div className={sMyPosts.postsBlock}>
      Myposts
      <div className={sMyPosts.sendMessage}>
        <textarea></textarea>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={sMyPosts.posts}>
         {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
