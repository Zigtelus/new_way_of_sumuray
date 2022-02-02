import React from 'react'
import { addPostActionCreate, onChengeElementActionCreate } from '../../../Redux/profile-reducer'
// import { addPostActionCreate, onChengeElementActionCreate } from '../../../Redux/Redux'
import Post from "./Post/Post"

const MyPosts = (props)=> {

    const postElement = props.profilePage.posts.map(item => <Post message={item.message} key={item.id} like={item.like} />)

    const newPostElement = React.createRef()

    const addPost = ()=> {
      const action = addPostActionCreate()
      props.dispatch(action)
    }

     const onChengeElement = ()=> {
      const text = newPostElement.current.value
      const action = onChengeElementActionCreate(text)
      props.dispatch(action)
    }

    return <div className="">
        My posts

        <div>
          <textarea onChange={onChengeElement} ref={newPostElement} value={props.profilePage.newPostText} name="" id="" cols="30" rows="5"></textarea>
          <button onClick={ addPost }>add post</button>
        </div>

        <div className="">
        New post
        </div>

        {postElement}
    </div>
}

export default MyPosts