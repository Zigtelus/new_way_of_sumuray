const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


export const sendMessageCreator = ()=> ({type: SEND_MESSAGE})
export const updateMessageCreator = (text)=> ({type: UPDATE_NEW_MESSAGE_BODY, text})


const dialogsReducer = (state, action)=> {
    switch (action.type) {

        case SEND_MESSAGE: 
            let newPost = {
                id: state.messages.length+1,
                message: state.newMessageBody
            }
            state.newMessageBody = ''
            state.messages.push(newPost)
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text
            return state
        default:
            return state
    }


    // if (action.type === SEND_MESSAGE) {
    //     let newPost = {
    //         id: state.messages.length+1,
    //         message: state.newMessageBody
    //     }
    //     state.newMessageBody = ''
    //     state.messages.push(newPost)
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.text
    // }
}


export default dialogsReducer