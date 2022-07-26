const ADD_POST= "ADD-POST";
const UPDATE_POST= "UPDATE-NEW-POST-TEXT" ;

const profileReducer = (state, action) =>{

    switch (action.type){
        
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 12,
              }
            
              state.posts.push(newPost)
              state.newPostText=''
              break;
    
        case UPDATE_POST:
            state.newPostText = action.newText;
            break;
        
        default:
            return state;
    }


    return state
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
  


export default profileReducer