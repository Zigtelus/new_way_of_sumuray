// import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/Redux'
import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer'
// import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'




// const DialogsContainer = (props)=> {


//     return <StoreContext.Consumer> 
//     {
//         (store) => {
            
//             const onSendMessageClick = (e)=> {
//                 store.dispatch(sendMessageCreator())
//             }
            
//             const onNewMessageChange = (body)=> {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }

//             return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={store.getState().dialogsPage}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        updateMessageBody: (body)=> dispatch(updateNewMessageBodyCreator(body)),
        sendMessage: ()=> dispatch(sendMessageCreator())
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer