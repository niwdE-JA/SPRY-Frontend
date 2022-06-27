import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Main.css'

const Dialog = ({prompt, unprompter}) => {
    let [ display, setDisplay ] = useState('initial')


  return (
    <>
        <div className = 'dialog' style = {{animation: prompt, display: display }} >
            <h3 className = 'cancel' onClick = { () => { unprompter() } }>+</h3>
            <h3 className = 'h3r'>
                Dialog message goes here
            </h3>
            <div className = 'regTxt' style = {{ paddingBottom: '1.5rem'}}>
                <p>details of message goes here</p> 
            </div>
            <a onClick = { () => { unprompter() } } className = 'btn'>
                OK
            </a>
        </div> 
    </>
  );
}
export default Dialog;