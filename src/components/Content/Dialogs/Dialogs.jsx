import React from "react";
import sDialogs from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./MessagesItem/MessagesItem";





const Dialogs = (props) => {


  let addPostElement = React.createRef()


  let addPost = () =>{
    props.addMessage()
  }

  let dialogsElements = props.state.dialogs.map(item=>
    <DialogItem key={item.id} name={item.name} id={item.id} />
  )

  let messagesElements = props.state.messages.map(item=>
    <Message key={item.id} message={item.message} />
  )


  const updateMessageText = () =>{
    let text = addPostElement.current.value;
    props.updateMessage(text)
  }

  return (
    <div className={sDialogs.dialogs}>
      <div className={sDialogs.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={sDialogs.messages}>
        {messagesElements}
        <div>
          <textarea ref={addPostElement} value={props.state.newMessage} onChange={updateMessageText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
  
};

export default Dialogs;
