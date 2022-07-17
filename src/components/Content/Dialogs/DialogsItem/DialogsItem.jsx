import { NavLink } from "react-router-dom";
import sDialogsItem from "./DialogsItem.module.css";


const DialogItem = (props) => {
  return (
    <div className={sDialogsItem.dialog + " " + sDialogsItem.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;
