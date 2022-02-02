import MyPosts from './MyPosts/MyPost'
import './Profile.css'
import Profileinfo from './Profileinfo/Profileinfo'

const Profile = (props)=> {
    return <main>
      <Profileinfo />
      <MyPosts
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </main>
}

export default Profile