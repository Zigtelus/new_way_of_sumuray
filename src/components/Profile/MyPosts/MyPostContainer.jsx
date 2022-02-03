import React from 'react'
import { addPostActionCreate, onChengeElementActionCreate } from '../../../Redux/profile-reducer'
import MyPosts from './MyPost'
import Post from "./Post/Post"

const MyPostsContainer = (props)=> {
  
    let state = props.store.getState()

    const postElement = state.profilePage.posts.map(item => <Post message={item.message} key={item.id} like={item.like} />)

    debugger
    const newPostElement = React.createRef()

    const addPost = ()=> {
      const action = addPostActionCreate()
      props.store.dispatch(action)
    }

    const onPostChange = (text)=> {
      const action = onChengeElementActionCreate(text)
      props.store.dispatch(action)
    }

    return <MyPosts addPost={addPost} 
                    updateNewPostText={onPostChange} 
                    posts={state.profilePage.posts} 
                    newPostText={state.profilePage.newPostText}
            />
}

export default MyPostsContainer