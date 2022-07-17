import sIconFriend from "./IconFriend.module.css";


const IconFriend = (props) => {
  return (
    <div>
     <div >
      <img className={sIconFriend.iconFriend} src={props.img} alt="friend" />
     </div>
     <div className={sIconFriend.friendName}>
      {props.name}
     </div>
    </div>
  );
};

export default IconFriend;
