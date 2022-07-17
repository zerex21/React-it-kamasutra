import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import Friends from './components/Content/Friends/Friends';

function App(props) {
 
  return (
    <BrowserRouter>
     <div className='app-wrapper'>
      <Header/> 
      <Nav state = {props.state.sideBar}/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element = {<Profile state = {props.state.profilePage}/>}></Route>
          <Route path='/dialogs' element = {<Dialogs state = {props.state.messagesPage}/>}></Route>
          <Route path='/news' element = {<News/>}></Route>
          <Route path='/music' element = {<Music/>}></Route>
          <Route path='/settings' element = {<Settings/>}></Route>
          <Route path='/friends' element = {<Friends/>}></Route>
        </Routes>
      </div>    
    </div>
    </BrowserRouter>
  );
}


export default App;
