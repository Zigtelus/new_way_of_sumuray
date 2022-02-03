import React from 'react'
import { addPostActionCreate, onChengeElementActionCreate } from '../../../Redux/profile-reducer'
import Post from "./Post/Post"

const MyPosts = (props)=> {
    debugger
    const postElements = props.posts.map(item => <Post message={item.message} key={item.id} like={item.like} />)

    const newPostElement = React.createRef()

    const onAddPost = ()=> {
      props.addPost()
    }

     const onPostChange = ()=> {
      const text = newPostElement.current.value
      props.updateNewPostText(text)
    }

    return <div className="">
        My posts

        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="30" rows="5"></textarea>
          <button onClick={ onAddPost }>add post</button>
        </div>

        <div className="">
        New post
        </div>

        {postElements}
    </div>
}

export default MyPosts