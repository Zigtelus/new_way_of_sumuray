// import MyPosts from './MyPosts/MyPost'
import MyPostsContainer from './MyPosts/MyPostContainer'
import './Profile.css'
import Profileinfo from './Profileinfo/Profileinfo'

const Profile = (props)=> {
    return <main>
      <Profileinfo />
      <MyPostsContainer
        store={props.store}
        // profilePage={props.profilePage}
        // dispatch={props.dispatch}
      />
    </main>
}

export default Profile