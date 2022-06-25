import React from 'react';

const Error= ({err, reload} )=> { 
  return (
    <section className='mainSect bw'>
        <div>
            <div>
                <ion-icon id='big-icon' name='information-circle'></ion-icon>
                <h1 className='h1'>Error loading page</h1>{/*problem*/}
            </div>
             
            <h2 className='h2'>There was a problem loading this page</h2> {/*Description of Problem*/}
            <p className='regTxt'>check internet connection blah blah blah</p> {/*Possible Solutions*/}
            <div className='bt-box'>
                <a className='btn' onClick={reload}>Reload</a>
            </div> {/*Reload page*/}
        </div>
        <div>
            <img src='' alt='Error loading page(image)'/>
        </div>
    </section>
  );
}


export default Error;