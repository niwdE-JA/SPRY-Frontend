import React from 'react';
import './about.css'
import './icons.css'
import Ionicons from './Ionicons';

const About= ()=> {
  return (
    <>
      <section className='aboutSect bw'>
        <div className='abouthalf'>
          <h1 className='h1'>Welcome to <hr className='hr'/> <span className='spry_h1'>SPRY</span></h1>
          <h3 className='h3r'>Developed by NXTHub</h3>
          <div className='smallTxt'>
            <div className='regTxt'>
            <p>The <span style={{color:'rgb(73 175 84)',fontSize:'1.5rem',fontWeight:'800',textTransform:'uppercase'}}>spry</span> project was devloped as a social-media-like platform running on web3 using <span className='highlight bold'>React</span> and <span className='highlight bold'>node, express JS</span>, create an account and share your profile link and check back for comments on your account, it is anonymous so you'll have no idea who commented</p>
            </div>
          </div>
          <h3 className='h3r'>have fun</h3>
        </div>
        <img src='projects.svg' className='about_img'/>
      </section>
      
      <section className='fockerSect'>
        <h1 className='h1'>
          Meet the <span style={{color:'rgb(73 175 84)',fontSize:'5rem'}}>Creators</span><hr className='hr'/> 
          <span className='vrn'>
            <span style={{
              color:'rgb(73 175 84)',
              fontSize:'5rem',
              fontWeight:'700',
              textTransform:'uppercase'}}>
              spry
            </span>  
          </span> 
        </h1>
        <div className='fockers'>
          <div className='focker_1'>
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
                        <a href="#"><Ionicons className='medium-icon' name='IoLogoLinkedin'/></a>
                    </div>                    
                  </div>
                </div>
                <h2 className='h3a tc highlight'>Edwin A.J</h2>
                <p style={{fontSize:'1rem'}}>dezwhy97@gmail.com<br/> +234 701 210 6857</p>             
              </div>
            </div>
          </div>

          <div className='focker_2'>
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
                        <a href="#"><Ionicons className='medium-icon' name='IoLogoGithub'/></a>
                    </div>
                    <div className="icon-container">
                        <a href="#"><Ionicons className='medium-icon' name='IoLogoLinkedin'/></a>
                    </div>                    
                  </div>
                </div>
                <h2 className='h3a tc highlight'>Edwin O.H</h2>
                <p style={{fontSize:'1rem'}}>oti.edwin@yahoo.com<br/>
                 +234 810 596 6585</p>             
              </div>'
            </div>
          </div>
        </div> 
      </section>
    </>    
  );
}
export default About;

 