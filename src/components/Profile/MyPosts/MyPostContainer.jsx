
import { connect } from 'react-redux'
import { addPostActionCreate, onChengeElementActionCreate } from '../../../Redux/profile-reducer'
import MyPosts from './MyPost'

// const MyPostsContainer = (props)=> {
  
//     // let state = props.store.getState()


//     return (
//       <StoreContext.Consumer> 
//       {
//         (store) => {
//           let state = store.getState()
      
//           const addPost = ()=> {
//             store.dispatch(addPostActionCreate())
//           }
      
//           const onPostChange = (text)=> {
//             const action = onChengeElementActionCreate(text)
//             store.dispatch(action)
//           }
          
//           return <MyPosts addPost={addPost} 
//                 updateNewPostText={onPostChange} 
//                 posts={state.profilePage.posts} 
//                 newPostText={state.profilePage.newPostText}/>
//         }
//       }
//       </StoreContext.Consumer>
//     )
// }


const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = dispatch => {
  console.log('profilePage')
  return {
        updateNewPostText: (text) => {
          const action = onChengeElementActionCreate(text)
          dispatch(action)
        },
        addPost: ()=> {
          const action = addPostActionCreate()
          dispatch(action)
        }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer