import { NavLink } from 'react-router-dom'
import classesGts from './Navbar.module.css'

const Navbar = ()=> {
    const linkActive = (navData)=> {
      return navData.isActive ? classesGts.active : classesGts.item
    }

    return <nav>
      <ul>
        <li><NavLink to="/profile" className={(navData) => linkActive(navData) } >Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={(navData) => linkActive(navData) } >Messages</NavLink></li>
        <li><NavLink to="/news" className={(navData) => linkActive(navData) } >News</NavLink></li>
        <li><NavLink to="/music" className={(navData) => linkActive(navData) } >Music</NavLink></li>
        <li><NavLink to="/settings" className={(navData) => linkActive(navData) } >Settings</NavLink></li>
      </ul>
    </nav>
}

export default Navbar