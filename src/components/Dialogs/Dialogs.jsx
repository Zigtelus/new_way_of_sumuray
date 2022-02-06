
import DialogItem from './Dialogitem/Dialogitem'
import classessGreg from './Dialogs.module.css'
import Message from './Message/Message'




const Dialogs = (props)=> {

    
    const state = props.dialogsPage
    
    const dialogsElement = props.dialogsPage.dialogs.map(item => <DialogItem link='/dialogs/' key={item.id} id={item.id} name={item.name} />)
    const messagesElement = props.dialogsPage.messages.map(item => <Message key={item.id} message={item.message}/>)
    let newMessageBody = state.newMessageBody

    
    const onSendMessageClick = ()=> {
        props.sendMessage()
    }


    const onNewMessageChange = (e)=> {
        const body = e.target.value
        
        props.updateMessageBody(body)
    }


    return <div className={classessGreg.dialogs}>
        <ul>
            {dialogsElement}
        </ul>
        <div>
            <div className="">
                <textarea onChange={onNewMessageChange} value={newMessageBody} rows="7"></textarea>
                <button onClick={onSendMessageClick}>send</button>
            </div>
            {messagesElement}
        </div>
    </div>
}

export default Dialogs


// onSendMessageClick

// onNewMessageChange
// 35+11+13+18+12+17+22+17+11+16
// 26+13+21+39+26+19+22+12+21+22+16
// 13+13+23+19+29+32+10+26+25+29 
// 20+23+24+36+19+22+27+34+25+53
// 28+29+40+43+29+21+20+42+62+19
// 29+43+40+29+28+53+25+35+27+22+19+36+24+23+20+