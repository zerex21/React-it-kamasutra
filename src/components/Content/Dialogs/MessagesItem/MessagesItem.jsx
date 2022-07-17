import sMessagesItem from "./MessagesItem.module.css";


const Message = (props) => {
  return <div className={sMessagesItem.message}>{props.message}</div>;
};



export default Message;
