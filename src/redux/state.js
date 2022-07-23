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

  getState(){
    return this._state
  },
   
  addPost(){
  let newPost = {
    id: 5,
    message: this._state.profilePage.newPostText,
    like: 12,
  }

  this._state.profilePage.posts.push(newPost)
  this._state.profilePage.newPostText=''
  this._callSubscriber(this._state)
},

  addMessage(){
  let newMessagePost = {
    id: 5,
    message:  this._state.messagesPage.newMessage,
  }

  this._state.messagesPage.messages.push(newMessagePost)
  this._state.messagesPage.newMessage=''
  this._callSubscriber(this._state)
},

  updateMessage(newText){
  this._state.messagesPage.newMessage = newText;
  this._callSubscriber(this._state)
},

  updateNewPostText(newText){
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state)
},

  subscribe(observer){
  this._callSubscriber = observer
},


}






/* window.state = state ; */







export default store;

window.store = store