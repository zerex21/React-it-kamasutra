import sDialogs from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./MessagesItem/MessagesItem";





const Dialogs = (props) => {

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
      </div>
    </div>
  );
  
};

export default Dialogs;
