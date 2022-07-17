import sPost from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={sPost.item}>
      <img
        src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
        alt="cat"
      />
      {props.message}
      <div>
        <span>like: {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
