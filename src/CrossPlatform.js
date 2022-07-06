import React from 'react'

const CrossPlatform=()=>{

  return (
    <>
        <h1 className=' h1 tc mc slide-up'>
            {'What we have for '}
            <span className = 'h1' style={{color:'#1f7c49', fontWeight:'600'}}>
            YOU
            </span>
            <hr className='hr'/> 
        </h1>
        <section className='aboutSect bw fit-height animated'>
            <img src='cross platform.png' className='about_img slide-left'/>        
            <div className='abouthalf slide-right'>
                <div className='m1'>
                    <h1 className='h1'>Cross Platform Support</h1>

                    <h3 className='h3r'>Coming Soon</h3>
                    <div className='smallTxt'>
                        <div className='regTxt'>
                            <p><span style={{color:'#1f7c49',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>spry</span> is maybe going to someday be available across all Platforms. Considering that this is a project of leisure, This is only a probability. In the event that we decide to go cross platform, We're going to build it using <span className='highlight bold'>React native</span></p>
                        </div>
                    </div>
                    <h3 className='h3r'>In the meantime...</h3>
                    <div className='btns-box'>
                        <a href = '#signup' className='hollow'>Register</a>
                        <a href = '#login' className='btns'>log in</a>
                    </div>                    
                </div>

            </div>
        </section>            
    </>

  );
}

export default CrossPlatform