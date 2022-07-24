const ADD_POST= "ADD-POST";
const ADD_MESSAGE= "ADD-MESSAGE";
const UPDATE_POST= "UPDATE-NEW-POST-TEXT" ;
const UPDATE_MESSAGE= "UPDATE-MESSAGE" ;




let store = {

  _callSubscriber(){
    console.log('sss')
  },

  _state:{
    profilePage:{
        posts: [
            { id: 1, message:"Hi", like:2 },
            { id: 2, message:"Yo", like:2},
          ],
        newPostText:'Type...'
       
    },
    messagesPage:{
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Buy" },
            { id: 3, message: "HA-HA-HA" },
          ],
             
          dialogs: [
            { id: 1, name: "Oleg" },
            { id: 2, name: "Vova" },
            { id: 3, name: "Sveta" },
          ],
          newMessage:'Type...'
    },
    sideBar:{
        friends:[
            {id:1, name:"Koka", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
            {id:2, name:"Vika", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
            {id:3, name:"Sasha", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
        ]
    }
      
},

  subscribe(observer){
    this._callSubscriber = observer
  },

  getState(){
    return this._state
  },


  dispatch(action){
    if(action.type === ADD_POST){
      
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 12,
      }
    
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText=''
      this._callSubscriber(this._state)
    }

    else if(action.type === ADD_MESSAGE){
      
      let newMessagePost = {
        id: 5,
        message:  this._state.messagesPage.newMessage,
      }
    
      this._state.messagesPage.messages.push(newMessagePost)
      this._state.messagesPage.newMessage=''
      this._callSubscriber(this._state)
    }

   else if(action.type === UPDATE_POST){
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state)
   }
  
   else if(action.type === UPDATE_MESSAGE){
    this._state.messagesPage.newMessage = action.newText;
    this._callSubscriber(this._state)
   }
  }


}


export let addPostCreator = () =>{
  return{
    type:ADD_POST,
  }
}

export let updatePostCreator = (text) =>{
  return{
    type:UPDATE_POST,
    newText:text,
  }
}


 
export let addMessageCreator = () =>{
  return{
    type:ADD_MESSAGE,
  }
 } 
  
export let updateMessageCreator = (text) =>{
   return{
     type:UPDATE_MESSAGE,
     newText:text,
   }
 }





/* window.state = state ; */







export default store;

window.store = store