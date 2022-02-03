// import MyPosts from './MyPosts/MyPost'
import MyPostsContainer from './MyPosts/MyPostContainer'
import './Profile.css'
import Profileinfo from './Profileinfo/Profileinfo'

const Profile = (props)=> {
    return <main>
      <Profileinfo />
      <MyPostsContainer />
    </main>
}

export default Profile