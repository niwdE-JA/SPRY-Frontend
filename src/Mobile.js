import React from 'react'

const Mobile=()=>{

  return (
    <>
        <h1 className='h1 tc mc slide-up'>
            {"We're here for "}
            <span className = 'h1' style={{color:'rgb(73 175 84)',fontSize:'5rem', fontWeight:'600'}}>
            YOU
            </span>
            <hr className='hr'/> 
        </h1>
        <section className='aboutSect bw fit-height'>
            <div className='abouthalf slide-left'>
            <h1 className='h1'>Mobile Support</h1>
            <h1 className='spry_h1'>SPRY</h1>

            <h3 className='h3r'>Coming Soon</h3>
            <div className='smallTxt'>
                <div className='regTxt'>
                <p><span style={{color:'rgb(73 175 84)',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>spry</span> is maybe going to someday be available across all Platforms. Considering that this is a project of leisure, This is only a probability. In the event that we decide to go cross platform, We're going to build it using <span className='highlight bold'>React native</span>.</p>
                </div>
            </div>
            <h3 className='h3r'>In the meantime...</h3>
            <div className='btns-box'>
                <a href = '#signup' className='hollow'>Register</a>
                <a href = '#login' className='btns'>log in</a>
            </div>
            </div>
            <img src='mobile.png' className='about_img slide-right'/>
        </section>    
    </>

  );
}

export default Mobile