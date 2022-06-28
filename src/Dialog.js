import React from 'react';
import './Main.css'

const Dialog = ({ unprompter, dialog_display, message}) => {

  return (
    <>
        <div className = {'dialog' + ' ' + ( (dialog_display) ? '': 'invisible') } >
            <h3 className = 'cancel' onClick = { () => { unprompter() } }>+</h3>
            <h3 className = 'h3r'>
                Dialog message goes here
            </h3>
            <div className = 'regTxt' style = {{ paddingBottom: '1.5rem'}}>
                <p>Details of message goes here</p>
            </div>
            <a onClick = { () => { unprompter() } } className = 'btn'>
                OK
            </a>
        </div> 
    </>
  );
}
export default Dialog;