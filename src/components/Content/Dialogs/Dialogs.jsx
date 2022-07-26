import React from "react";
import { addMessageCreator, updateMessageCreator } from "../../../redux/messageReducer";
import sDialogs from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./MessagesItem/MessagesItem";





const Dialogs = (props) => {


  let addPost = () =>{
    props.dispatch(addMessageCreator())
  }

  let updateMessageText = (e) =>{
    let text = e.target.value;
    props.dispatch(updateMessageCreator(text))
  }



  let dialogsElements = props.state.dialogs.map(item=>
    <DialogItem key={item.id} name={item.name} id={item.id} />
  )

  let messagesElements = props.state.messages.map(item=>
    <Message key={item.id} message={item.message} />
  )



  return (
    <div className={sDialogs.dialogs}>
      <div className={sDialogs.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={sDialogs.messages}>
        {messagesElements}
        <div>
          <textarea value={props.state.newMessage} placeholder='Enter your message...' onChange={updateMessageText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
  
}

export default Dialogs;
