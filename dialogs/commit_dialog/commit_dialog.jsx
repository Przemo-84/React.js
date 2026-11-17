import {useLayoutEffect, useRef} from "react";
import PropTypes from "prop-types";
import './commit_dialog.css';

function Commit_Dialog(props)
{
    const commit_dialog_ref = useRef(null);
    const commit_dialog_span_ref = useRef(null);
    const commit_dialog_button_ref = useRef(null);
    const commit_dialog_buttons_div_ref = useRef(null);
    const firstMount = useRef(false);

    const showModal = ()=>{
        if(commit_dialog_ref.current != null && commit_dialog_buttons_div_ref != null)
        {
            commit_dialog_ref.current.showModal();

            if(commit_dialog_ref.current != null && commit_dialog_buttons_div_ref != null)
                commit_dialog_buttons_div_ref.current.style.left = `${(commit_dialog_ref.current.clientWidth - commit_dialog_buttons_div_ref.current.clientWidth) / 2}px`;
        } 
    }

    const setMessage = (message_text, message_color)=>{
        if(commit_dialog_span_ref.current != null)
        {
            if(message_text != undefined && message_text != "" && message_text != null)
            {
                commit_dialog_span_ref.current.innerText = message_text;
            }

            if(message_color != undefined && message_color != "" && message_color != null)
            {
                commit_dialog_span_ref.current.style.color = message_color;
            }
        }
    }

    const button_onClick = (evt)=>{

        if (props.commitCallback != null)
        {
            if(evt.currentTarget.id == "commit_button")
                props.commitCallback(true, event);
            else if(evt.currentTarget.id == "abort_button")
                props.commitCallback(false, event);
        }

        if(commit_dialog_ref.current != null)
            commit_dialog_ref.current.close();
    }


    useLayoutEffect(()=>{
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
            if(commit_dialog_ref.current != null && commit_dialog_buttons_div_ref != null)
                commit_dialog_buttons_div_ref.current.style.left = `${(commit_dialog_ref.current.clientWidth - commit_dialog_buttons_div_ref.current.clientWidth) / 2}px`;
        }
    });

     const commit_dialog_style = {
            position : 'fixed', backgroundColor : '#eef1f6', borderRadius : '10px', border : '1px solid #7c848c',
        }


    return(
            <dialog className = "commit_dialog" style = {commit_dialog_style} ref = {commit_dialog_ref}>
                    <span className = "commit_dialog_span" ref = {commit_dialog_span_ref}>{props.dialogMessage}</span>
                    <div id = "commit_dialog_buttons_div" ref = {commit_dialog_buttons_div_ref}>
                        <button className = "commit_dialog_button" id = "abort_button" ref = {commit_dialog_button_ref} onClick = {button_onClick}>{props.abort_buttonText}</button>
                        <button className = "commit_dialog_button" id = "commit_button" ref = {commit_dialog_button_ref} onClick = {button_onClick}>{props.commit_buttonText}</button>
                    </div>
            </dialog>
    )

}

Commit_Dialog.PropTypes={
    dialogMessage : PropTypes.string.isRequired,
    commit_buttonText : PropTypes.string.isRequired,
    abort_buttonText : PropTypes.string.isRequired,
    setShowModalCallback : PropTypes.func,
    setMessageCallback : PropTypes.func,
    commitCallback : PropTypes.func,
    event : PropTypes.object
}

export default Commit_Dialog