import React from 'react';
import './about.css'
import './icons.css'
import Ionicons from './Ionicons';

const About= ()=> {
  return (
    <>
    
      <section className='aboutSect bw'>
        <div className='abouthalf'>

          <h1 className='h1'>Welcome to</h1>
          <h1 className='spry_h1'>SPRY</h1>

          <h3 className='h3r'>Developed by NXTHub</h3>
          <div className='smallTxt'>
            <div className='regTxt'>
            <p><span style={{color:'rgb(73 175 84)',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>spry</span> was devloped by Nxt_Hub. A web app soon to run on web3 using <span className='highlight bold'>React</span> and <span className='highlight bold'>node, express JS</span>. Create an account, Share your profile link and check your comments section, it is anonymous so you'll have no idea who comments</p>
            </div>
          </div>
          <h3 className='h3r'>have fun</h3>
          <div className='btns-box'>
              <a href = '#signup' className='hollow'>Get Started</a>
              <a href = '#login' className='btns'>I have an Account</a>
          </div>
        </div>
        <img src='projects.svg' className='about_img'/>
      </section>
      
      <section className='fockerSect'>
        <h1 className='h1'>
          {'Meet the '}
          <span style={{color:'rgb(73 175 84)',fontSize:'5rem', fontWeight:'600'}}>
            Creators
          </span>
          <hr className='hr'/> 
        </h1>
        <h3 className = 'h3r'>Nxt_Hub Developers</h3>
        <div className='fockers'>     
          <div className='focker_1'>
            <div className = 'bottom-right border'></div>            
            <div className = 'top-left border'></div>            
            <div className='inner'>
              <div className='mg2'>
                <ul className='tc'>
                  <span style={{color:'rgb(73 175 84)',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>
                  Roles<br/>
                  </span>
                  Frontend Using:<br/>
                  <span className='highlight bold'> React</span><br/> 
                  Backend Using:
                  <li className='highlight bold'>Node, Express JS</li> 
                  <li className='highlight bold'>postgreSQL</li> 
                  <li className='highlight bold'>web3</li>  
                </ul>
              </div>
              <div className='mg2'>
                <div className="image-box focker-1">
                  <div className='icon'>
                    <div className="icon-container">
                        <a href="https://github.com/niwdE-JA"><Ionicons className='medium-icon' name='IoLogoGithub'/></a>
                    </div>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/alabo-edwin-2596b123b"><Ionicons className='medium-icon' name='IoLogoLinkedin'/></a>
                    </div>                    
                  </div>
                </div>
                <h2 className='h3a tc highlight'>Edwin A.J</h2>
                <p style={{fontSize:'1rem'}}>dezwhy97@gmail.com<br/> +234 701 210 6857</p>             
              </div>
            </div>
          </div>
        
          <div className='focker_2'>
            <div className = 'bottom-right border'></div>            
            <div className = 'top-left border'></div>            
            <div className='inner'>
            <div className='mg2'>
                <ul className='tc'>
                  <span style={{color:'rgb(73 175 84)',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>
                  Roles<br/>
                  </span>
                  Frontend Using:<br/>
                  <span className='highlight bold'> React</span><br/> 
                  Backend Using:
                  <li className='highlight bold'>Node, Express JS</li> 
                  <li className='highlight bold'>postgreSQL</li> 
                </ul>
              
            </div>
              <div className='mg2 ft'>
                <div className="image-box focker-2">
                  <div className='icon'>
                    <div className="icon-container">
                        <a href="https://github.com/OtiEdwin"><Ionicons className='medium-icon' name='IoLogoGithub'/></a>
                    </div>
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/oti-edwin-624a7123b"><Ionicons className='medium-icon' name='IoLogoLinkedin'/></a>
                    </div>                    
                  </div>
                </div>
                <h2 className='h3a tc highlight'>Edwin O.H</h2>
                <p style={{fontSize:'1rem'}}>oti.edwin@yahoo.com<br/>
                +234 810 596 6585</p>             
              </div>
            </div>
          </div>
        </div> 
      </section>
      
    </>    
  );
}
export default About;

 