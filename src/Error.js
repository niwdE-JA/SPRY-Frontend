import React from 'react';
import Ionicons from './Ionicons'

const Error= ({err } )=> { 
  return (
    <section className='mainSect bw'>
        <div>
            <div>
                <Ionicons className='giant-icon redish' name = 'IoWarningOutline' />
                <h1 className='h1'>Error loading page</h1>{/*problem*/}
            </div>
             
            <div className='regTxt' style = { {paddingBottom: '1.5rem'} }>
                <p>There was a problem loading this page</p>
            </div> {/*Possible Solutions*/}

            <div className='bt-box'>
                <a className='btn' onClick={ ()=>window.location.reload() }>Reload</a>
            </div> {/*Reload page*/}
        </div>
    </section>
  );
}


export default Error;