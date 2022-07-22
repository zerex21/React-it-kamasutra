import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';

/* rerenderTree(state) */
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = (state) =>{
  root.render( 
    <React.StrictMode>
      <BrowserRouter>
        <App state = {state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );
  
}

rerenderTree(state)

subscribe(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();