// import { updateMessageCreator, sendMessageCreator } from '../../Redux/Redux'
import { sendMessageCreator, updateMessageCreator } from '../../Redux/dialogs-reducer'
import DialogItem from './Dialogitem/Dialogitem'
import classessGreg from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs = (props)=> {



    const onNewMessageChange = (e)=> {
        const text = e.target.value
        const action = updateMessageCreator(text)
        props.dispatch(action)
    }

    const onSendMessageClick = (e)=> {
        const action = sendMessageCreator()
        props.dispatch(action)
    }

    const elementDialog = props.messagesPage.dialogs.map(item => <DialogItem link='/dialogs/' key={item.id} id={item.id} name={item.name} />)
    const elementMessage = props.messagesPage.messages.map(item => <Message key={item.id} message={item.message}/>)

    return <div className={classessGreg.dialogs}>
        <ul>
            {elementDialog}
        </ul>
        <div>
            <div className="">
                <textarea onChange={onNewMessageChange} value={props.messagesPage.newMessageBody} rows="7"></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
            {elementMessage}
        </div>
    </div>
}

export default Dialogs


// onSendMessageClick

// onNewMessageChange