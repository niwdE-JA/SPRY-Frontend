import React from 'react';
import Footlist from './FootList';
import './Footer.css'
import Ionicons from './Ionicons';
import logo from './assets/icon.svg'

const Footer=({route, loggedin})=> {

  return (
    <footer>
        <div className ='foot '>
            <div className='footContent'>
                <div className='mid'>
                    <div className='mid1'>
                        <ul className ='tl'>
                            <Footlist 
                            route= {route} 
                            loggedin= {loggedin}
                            />
                            <li><a>Contact us</a></li>
                        </ul>
                        <ul className ='tl'>
                            <li><a href='https://wa.me/+2348105966585'>Facebook</a><ion-icons className='logo-facebook'></ion-icons></li>
                            <li><a href='https://wa.me/+2348105966585'>Instagram</a><ion-icons className='logo-instagram'></ion-icons></li>
                            <li><a href='https://wa.me/+2348105966585'>Github</a><ion-icons className='logo-whatsapp'></ion-icons></li>
                            <li><a href='https://wa.me/+2348105966585'>LinkedIn</a><ion-icons className='logo-whatsapp'></ion-icons></li>
                        </ul>
                        <ul className ='tl'>
                            <img className='nxt' src ={logo}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='foot'>
            <div className='footContent'>
                <h3 className='ml'>Copyright Next_Hub 2022</h3>
                <ul className='no-list'>
                    <li><a href=""><Ionicons className='small_medium-icon' name='IoLogoFacebook'/></a></li>
                    <li><a href=""><Ionicons className='small_medium-icon' name='IoLogoInstagram'/></a></li>
                    <li><a href=""><Ionicons className='small_medium-icon' name='IoLogoTwitter'/></a></li>
                    <li><a href=""><Ionicons className='small_medium-icon' name='IoLogoGithub'/></a></li>
                    <li><a href=""><Ionicons className='small_medium-icon' name='IoLogoLinkedin'/></a></li>
                </ul>
            </div>            
        </div>

    </footer>
  );
}

export default Footer;
