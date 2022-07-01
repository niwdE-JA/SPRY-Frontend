import React from 'react';
import Highlight from './Highlight';
import './Main.css'


const Comment = ({content, value})=>{
    let {alias, message, time} = content;
    let date_object = new Date(time);

    return(
        <div className='content rplCont'>
            <div className='rplbx'>
              <div className='imgRpl'>
                  <img src = {`${ alias }.jpg`} style = {{ height: '3rem', width: '3rem' }}/>
              </div> 
              <div className='rpl'>
                <h2><Highlight message={alias} value={value}/></h2>
                <p className='whitespace'><Highlight message={message} value={value}/></p>

              </div>
            </div>
            <div className='tmbx'><h2>{date_object.toLocaleString()}</h2></div>
          </div>
    );
}

export default Comment;

