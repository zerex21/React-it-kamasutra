const UPDATE_MESSAGE= "UPDATE-MESSAGE" ;
const ADD_MESSAGE= "ADD-MESSAGE";

let initialState = {
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
   newMessage:''}

const messageReducer = (state = initialState, action) =>{
  

    switch(action.type){

        case ADD_MESSAGE:
            let newMessagePost = {
                id: 5,
                message:  state.newMessage,
              }
            
              state.messages.push(newMessagePost)
              state.newMessage=''
              break;
         
        case UPDATE_MESSAGE:
            state.newMessage = action.newText;
            break;  
        
        default: 
            return state
    }

    return state
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
  


export default messageReducer;