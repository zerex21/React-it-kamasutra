let state={
    profilePage:{
        posts: [
            { id: 1, message:"Hi", like:2 },
            { id: 2, message:"Yo", like:2},
          ],
       
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
    },
    sideBar:{
        friends:[
            {id:1, name:"Koka", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
            {id:2, name:"Vika", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
            {id:3, name:"Sasha", img:"https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",},
        ]
    }
      
}

export default state;