import React from 'react';
import './Main.css'

const Dialog = ({ unprompter, message, description }) => {

    return (
    <>
        <div className = {'dialog' } >
            <h3 className = 'cancel' onClick = { () => { unprompter() } }>+</h3>
            <h3 className = 'h3r'>
                { message }
            </h3>
            <div className = 'regTxt' style = {{ paddingBottom: '1.5rem'}}>
                <p> { description } </p>
            </div>
            <a onClick = { () => { unprompter() } } className = 'btn'>
                OK
            </a>
        </div> 
    </>
  );
}
export default Dialog;