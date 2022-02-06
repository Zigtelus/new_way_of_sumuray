import classesGreg from './Users.module.css'

const Users = (props)=> {
  

  
  if (props.users.length === 0) {
    
    props.setUsers( [
        { 
            id: 1, 
            followed: true, 
            fullName: 'Valera', 
            status: 'ш отот', 
            location: { country: 'Belarus', city: 'Minsk' }, 
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        },
        { 
            id: 2, 
            followed: false, 
            fullName: 'Valera', 
            status: 'отот ото', 
            location: { country: 'Belarus', city: 'Minsk' }, 
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        },
        { 
            id: 3, 
            followed: true, 
            fullName: 'Valera', 
            status: 'о ж апто', 
            location: { country: 'Belarus', city: 'Minsk' }, 
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlQez2cgtJI3kOr2K8aikwPiy8EiG2Zt4mA&usqp=CAU'
        }
      ]
    )

  }

    // function clickFollowed () {
    //   this.followed ? props.follow(this.id) : props.unfollow(this.id)
    // }



    return <div className="">
      {
        props.users.map(item=> {
          console.log('Users ', props.users)
        return <div className={classesGreg.user}> 
          {/* <div className="">
            <div className=""><img src={item.photoUrl} alt="" /></div>
            <div className=""><button onClick={clickFollowed.bind(item)}>{item.followed ? 'unfollow' : 'follow'}</button></div>
          </div>
          <div className="">
            <div className="">
              <span>{item.fullName}</span>
              <span>{item.status}</span>
            </div>
            <div className="">
              <span>{item.location.country}</span> */}
              <span>{item.location.city}</span>
            {/* </div> */}
          {/* </div> */}
        </div>})
      }
      </div>
    
}

export default Users