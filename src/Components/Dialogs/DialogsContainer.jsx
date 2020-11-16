import React from 'react';
import { updateTextMes, sendMessage } from "./../../redux/dialogsReducer"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        textMes: state.dialogsPage.textMes,
        isAuth: state.auth.isAuth,
    };
};

export default compose (
    connect(mapStateToProps, { sendMessage, updateTextMes }),
    withAuthRedirect,
)(Dialogs);

