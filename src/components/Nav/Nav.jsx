/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import IconFriend from "../Content/Friends/IconFriend/IconFriend";
import sNav from "./Nav.module.css";

const Nav = (props) => {
  
  let lastFriends = props.state.friends.map( item=> (<IconFriend key={item.id} img={item.img} name={item.name}/>) ) 
  
  
  return (
    <nav className={sNav.nav}>
      <div className={sNav.item /* + " " + sNav.active */}  >
        <NavLink to="/profile"  className={(navData) => navData.isActive ? `${sNav.active}` : "" } >Profile</NavLink>
      </div>
      <div className={sNav.item} >
        <NavLink to="/dialogs" className={(navData) => navData.isActive ?  `${sNav.active}` : "" }>Messages</NavLink>
      </div>
      <div className={sNav.item}>
        <NavLink to="/news" className={(navData) => navData.isActive ?  `${sNav.active}` : "" }>News</NavLink>
      </div>
      <div className={sNav.item}>
        <NavLink to="/music" className={(navData) => navData.isActive ?  `${sNav.active}` : "" }>Music</NavLink>
      </div>
      <div className={sNav.item}>
        <NavLink to="/settings" className={(navData) => navData.isActive ? `${sNav.active}` : "" }>Settings</NavLink>
      </div>
      <div className={sNav.item + " " + sNav.friends}>
        <NavLink to="/friends" className={(navData) => navData.isActive ? `${sNav.active}` : "" }>Friends</NavLink>
      <div className={sNav.currentFriends}>
        {lastFriends}
      </div>
      </div>
    </nav>
  );
};

export default Nav;
