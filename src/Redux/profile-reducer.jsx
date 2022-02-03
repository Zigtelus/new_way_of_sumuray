const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const addPostActionCreate = ()=> ({type: ADD_POST})
export const onChengeElementActionCreate = (text)=> ({type: UPDATE_NEW_POST_TEXT, text})


let initialState = {
    posts: [
        {
          id: 1,
          message: 'Hi, My name is Greg',
          like: '15'
        },
        {
          id: 2,
          message: 'This is my first post',
          like: '20'
        }
    ],
    newPostText: ''
 }

const profileReducer = (state = initialState, action)=> {
    
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.text
            return state
        case ADD_POST: 
            const newPost = {
                id: state.posts.length+1,
                message: state.newPostText,
                like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}

export default profileReducer