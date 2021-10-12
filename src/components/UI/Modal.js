import React from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css"


const BackDrop = props => {
    return <>
        <div className={classes.backdrop} onClick={props.onCloseCart} />
    </>
}

const ModalOverlays = props => {
    return <>
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    </>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <>
        {ReactDOM.createPortal(<BackDrop onCloseCart={props.onCloseCart} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
    </>
}

export default Modal;
