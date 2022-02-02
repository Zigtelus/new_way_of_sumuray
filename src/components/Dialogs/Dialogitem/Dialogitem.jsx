import { NavLink } from "react-router-dom"

const DialogItem = (props)=> {
    const link = props.link + props.id

    return <li><NavLink to={link}> {props.name} </NavLink></li>
}




export default DialogItem