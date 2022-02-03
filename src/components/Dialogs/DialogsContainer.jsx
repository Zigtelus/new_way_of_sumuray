// import { updateMessageCreator, sendMessageCreator } from '../../Redux/Redux'
import { sendMessageCreator, updateMessageCreator } from '../../Redux/dialogs-reducer'
import DialogItem from './Dialogitem/Dialogitem'
import Dialogs from './Dialogs'
import classessGreg from './Dialogs.module.css'
import Message from './Message/Message'




const DialogsContainer = (props)=> {
    
    let state = props.store.getState().dialogsPage
    // let states = props.store.getState()
    

    const onSendMessageClick = (e)=> {
        props.store.dispatch(updateMessageCreator())
    }
    
    const onNewMessageChange = (body)=> {
        debugger
        props.store.dispatch(body)
    }
    

    return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer


// onSendMessageClick

// onNewMessageChange
// 35+11+13+18+12+17+22+17+11+16
// 26+13+21+39+26+19+22+12+21+22+16
// 13+13+23+19+29+32+10+26+25+29 
// 20+23+24+36+19+22+27+34+25+53
// 28+29+40+43+29+21+20+42+62+19
// 29+43+40+29+28+53+25+35+27+22+19+36+24+23+20+