import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"


const store = {
    _state: {
        profilePage: {
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
         },
         dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        return ('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this.getState())

    }
}






export default store
window.store = store
























//  const state = {
//     profilePage: {
//         posts: [
//             {
//               id: 1,
//               message: 'Hi, My name is Greg',
//               like: '15'
//             },
//             {
//               id: 2,
//               message: 'This is my first post',
//               like: '20'
//             }
//         ],
//         newPostText: ''
//      },
//      messagesPage: {
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Valera'
//             },
//             {
//                 id: 2,
//                 name: 'Mark'
//             },
//             {
//                 id: 3,
//                 name: 'Elena'
//             }
//         ],
//         messages: [
//             {
//                 id: 1,
//                 message: 'Hy My name is Petr'
//             },
//             {
//                 id: 2,
//                 message: 'MI dont belive youark'
//             },
//             {
//                 id: 3,
//                 message: 'Elena I dont belive you'
//             }
//         ]
//     }
// }

// export const addPost = ()=> {
//     const newPost = {
//         id: state.profilePage.posts.length+1,
//         message: state.profilePage.newPostText,
//         like: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText)=> {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const subscribe = observer => {
//     rerenderEntireTree = observer
// }

//  export default state