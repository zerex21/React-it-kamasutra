let rerenderTree = () =>{
  console.log('sss')
}

let state={
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
      
}


export const addPost = () =>{

  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 12,
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText=''
  rerenderTree(state)
}

export const addMessage = () =>{

  let newMessagePost = {
    id: 5,
    message: state.messagesPage.newMessage,
  }

  state.messagesPage.messages.push(newMessagePost)
  state.messagesPage.newMessage=''
  rerenderTree(state)
}


export const updateMessage = (newText) =>{
  state.messagesPage.newMessage = newText;
  rerenderTree(state)
}

export const updateNewPostText = (newText) =>{
  state.profilePage.newPostText = newText;
  rerenderTree(state)
}

export const subscribe = (observer) =>{
  rerenderTree = observer
}

export default state;