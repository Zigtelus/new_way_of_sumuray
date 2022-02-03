// import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/Redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'




const DialogsContainer = (props)=> {


    return <StoreContext.Consumer> 
    {
        (store) => {
            
            const onSendMessageClick = (e)=> {
                store.dispatch(sendMessageCreator())
            }
            
            const onNewMessageChange = (body)=> {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer