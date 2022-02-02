const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const addPostActionCreate = ()=> ({type: ADD_POST})
export const onChengeElementActionCreate = (text)=> ({type: UPDATE_NEW_POST_TEXT, text})


const profileReducer = (state, action)=> {
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


    // if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.text
    // } else if (action.type === ADD_POST) {
    //     const newPost = {
    //         id: state.posts.length+1,
    //         message: state.newPostText,
    //         like: 0
    //     }
    //     state.posts.push(newPost)
    //     state.newPostText = ''
    // }
}

export default profileReducer