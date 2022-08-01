import React from "react";
import sDialogs from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./MessagesItem/MessagesItem";





const Dialogs = (props) => {

  let state = props.messagesPage;


  let addPost = () =>{
    props.addMessage()
  }

  let updateMessageText = (e) =>{
    let text = e.target.value;
    props.updateMessageBody(text)
    //props.store.dispatch(updateMessageCreator(text))
  }



  let dialogsElements = state.dialogs.map(item=>
    <DialogItem key={item.id} name={item.name} id={item.id} />
  )

  let messagesElements = state.messages.map(item=>
    <Message key={item.id} message={item.message} />
  )

  let newMessage = state.newMessage


  return (
    <div className={sDialogs.dialogs}>
      <div className={sDialogs.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={sDialogs.messages}>
        {messagesElements}
        <div>
          <textarea value={newMessage} placeholder='Enter your message...' onChange={updateMessageText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
    </div>
  );
  
}

export default Dialogs;
