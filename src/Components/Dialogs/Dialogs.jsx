import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let newSendMessage = React.createRef();
    let newMessage = () => {
       props.sendMessage();
    };

    let onMessageChange = () => {
        let text = newSendMessage.current.value;
        props.updateTextMes(text);
    };

    let dialogConstructor = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />);
    let messageConstructor = props.messages.map(message => <Message message={message.message} />);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogConstructor}
            </div>
            <div className={classes.messages}>
                {messageConstructor}
                <textarea ref={newSendMessage} value={props.textMes} onChange={onMessageChange}>Send message</textarea>
                <button onClick={newMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;