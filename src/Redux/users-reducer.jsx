const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [
        // { 
        //     id: 1, 
        //     followed: true, 
        //     fullName: 'Valera', 
        //     status: 'ш отот', 
        //     location: { country: 'Belarus', city: 'Minsk' }, 
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        // },
        // { 
        //     id: 2, 
        //     followed: false, 
        //     fullName: 'Valera', 
        //     status: 'отот ото', 
        //     location: { country: 'Belarus', city: 'Minsk' }, 
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        // },
        // { 
        //     id: 3, 
        //     followed: true, 
        //     fullName: 'Valera', 
        //     status: 'о ж апто', 
        //     location: { country: 'Belarus', city: 'Minsk' }, 
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        // }
    ]
}


const usersReducer = (state = initialState, action)=> {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(item => {
                        if (item.id === action.usersId) {
                            return {...item, followed: false}
                        }
                        return item
                    }
            )}
        case UNFOLLOW:
            return {...state, users: state.users.map(item => {
                        if (item.id === action.usersId) {
                            return {...item, followed: true}
                        }
                        return item}
                    )
            }
        case SET_USERS:
            console.log('SET_USERS ', state)
            console.log(action)
            let q = {...state, users: [...state.users, ...action.users]}
            console.log('q ', q)
            console.log(state)
            console.log(action)
            return q
        default:
            console.log('default ', state )
            return state
    }

}


export const followAc = (usersId)=> ({type: FOLLOW, usersId})
export const unfollowAc = (usersId)=> ({type: UNFOLLOW , usersId})
export const setUsersAc = (users)=> ({type: SET_USERS , users})


export default usersReducer