import React from "react";
import { addMessageCreator, updateMessageCreator } from "../../../redux/messageReducer";
import Dialogs from "./Dialogs";






const DialogsContainer = (props) => {
/* debugger */

  let state = props.store.getState().messagesPage;


  let addPost = () =>{
    props.store.dispatch(addMessageCreator())
  }

  let updateMessageText = (text) =>{
    props.store.dispatch(updateMessageCreator(text))
  }


  return (<Dialogs messagesPage={state} addMessage={addPost} updateMessageBody={updateMessageText}/>);
  
}

export default DialogsContainer;
