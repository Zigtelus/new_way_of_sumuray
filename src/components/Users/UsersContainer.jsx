import { connect } from "react-redux"
import { followAc, setUsersAc, unfollowAc } from "../../Redux/users-reducer"
import Users from "./Users"

let mapStateToProps = state=> {
  console.log('mapStateToProps ', state.usersPage.users)
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = dispatch=> {
  return {
    follow: (userId)=> {
      dispatch(followAc(userId))
    },
    unfollow: (userId)=> {
      dispatch(unfollowAc(userId))
    },
    setUsers: (users)=> {
      console.log('mapDispatchToProps ', users)
      dispatch(setUsersAc(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)