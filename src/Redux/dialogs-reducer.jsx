const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


export const sendMessageCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text)=> ({type: UPDATE_NEW_MESSAGE_BODY, text})


let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Valera'
        },
        {
            id: 2,
            name: 'Mark'
        },
        {
            id: 3,
            name: 'Elena'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hy My name is Petr'
        },
        {
            id: 2,
            message: 'MI dont belive youark'
        },
        {
            id: 3,
            message: 'Elena I dont belive you'
        }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action)=> {
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