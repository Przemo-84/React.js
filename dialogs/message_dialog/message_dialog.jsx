import {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import './message_dialog.css';


function Message_Dialog(props)
{
    const message_dialog_ref = useRef(null);
    const message_dialog_span_ref = useRef(null);
    const message_dialog_button_ref = useRef(null);
    const firstMount = useRef(false);

    const showModal = ()=>{
        if(message_dialog_ref.current != null && message_dialog_button_ref.current != null && message_dialog_span_ref.current != null)
        {
            message_dialog_ref.current.showModal();
            message_dialog_button_ref.current.style.left = `${(message_dialog_ref.current.clientWidth - message_dialog_button_ref.current.clientWidth) / 2}px`;
        } 
    }

    const setMessage = (message_text, message_color)=>{
        if(message_dialog_span_ref.current != null)
        {
            if(message_text != undefined && message_text != "" && message_text != null)
            {
                message_dialog_span_ref.current.innerText = message_text;
            }

            if(message_color != undefined && message_color != "" && message_color != null)
            {
                message_dialog_span_ref.current.style.color = message_color;
            }
        }
    }

    useEffect(()=>{
        if(!firstMount.current)
        {

            if(props.setShowModalCallback != undefined && props.setShowModalCallback != null)
                props.setShowModalCallback(showModal);

            if(props.setMessageCallback != undefined && props.setMessageCallback != null)
                props.setMessageCallback(setMessage);

            firstMount.current = true;
        }
        else
        {
            if(message_dialog_ref.current != null && message_dialog_button_ref.current != null && message_dialog_span_ref.current != null)
            {
                // message_dialog_span_ref.current.innerText = `${props.textContents.message_dialog_span[0]}\n${props.textContents.message_dialog_span[1]}`;
                message_dialog_button_ref.current.style.left = `${(message_dialog_ref.current.clientWidth - message_dialog_button_ref.current.clientWidth) / 2}px`;
            }
            
        }
    });

     const message_dialog_style = {
            position : 'fixed', backgroundColor : '#eef1f6', borderRadius : '10px', border : '1px solid #7c848c',
        }

    const onMessageDailogButtonClick = ()=>{
        if(message_dialog_ref.current != null)
            message_dialog_ref.current.close();
    }

    return(
            <dialog className = "message_dialog" style = {message_dialog_style} ref = {message_dialog_ref}>
                    <span className = "message_dialog_span" ref = {message_dialog_span_ref}>{props.dialogMessage}</span>
                    <button className = "message_dialog_button" ref = {message_dialog_button_ref} onClick = {onMessageDailogButtonClick}>{props.buttonText}</button>
            </dialog>
    )

}

Message_Dialog.PropTypes={
    dialogMessage : PropTypes.string.isRequired,
    buttonText : PropTypes.isRequired,
    setShowModalCallback : PropTypes.func,
    setMessageCallback : PropTypes.func
}

export default Message_Dialog