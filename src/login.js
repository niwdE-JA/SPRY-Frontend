import React, {useEffect, useState} from 'react';
import Ionicons from './Ionicons'
import CrossPlatform from './CrossPlatform'

const Login=({loadAsync, login, } )=> {

    //might change this
    // useEffect(()=>{
    //  
    // }, []);

    const [error, setError] = useState('Invalid Username or Password');
    const [error_visible, setErrorVisibility] = useState(false);

    
    const [visible, setVisibility] = useState(false); 
    const [validEmail, setValidEmail] = useState(true); 
    const [validPassword, setValidPassword] = useState(true); 
    const [message, setMessage] = useState('Invalid Email or password'); 

    const validator = ()=>{
        let email = document.getElementById('email');
        let password = document.getElementById('password');

        if(! email.checkValidity() || email.value === '' ){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
        if(password.value.length === 0 ){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
        
        //
        if(! email.checkValidity() || email.value === '' ){
            setMessage("Please input a valid Email.");
            setVisibility(true);
        }else if(password.value.length === 0 ){
            setMessage('Please input a valid Password.');
            setVisibility(true);
        }else{
            setVisibility(false);
        }

        // return true;
    }

    
    const loginHandler = (e)=>{//doesnt seem to need to be asynchronous
        e.preventDefault();// controversial
        //get form info
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
        
        if(email === '' || password === ''){
            validator();
        }else if(validEmail && validPassword){
            loadAsync(
                async ()=>{
                    await login(email, password, logError);
                },
                1000
            );
        }else{
            // do nothing
        }
        
    }

    const logError = (message)=>{
        // set error message and visibility
        setError(message);
        setErrorVisibility(true);
    }

    return (
        <>
            <div className = 'bod'>
                <section className='register login bw animated'>
                    <div className='halfsect'>

                        <h1 className='h1'> Welcome to</h1>
                        <h1 className='spry_h1'>SPRY</h1>

                        <h3 className='h3r'>let's see what people think of you</h3>
                        <div className='smallTxt'>
                            <div className='regTxt'>
                            <p>login to <span style={{color:'rgb(73 175 84)',fontSize:'1.3rem',fontWeight:'800',textTransform:'uppercase'}}>spry</span> and see what your friends have been saying about you, You'll never know who comments but you'll see their comments</p>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <a href = '#signup' className='hollow'>Register</a>
                        </div>
                    </div>
                    <div className='halfsect'>
                        <form className='log-in form' id='login-form' onSubmit={ loginHandler } >

                            <div className='sp'>
                                <div id='info' className={'red ' + ( (error_visible) ? '' : 'invisible') }>
                                    <Ionicons className='small_medium-icon' name='IoInformationCircle' />
                                    <h3>{error}</h3> 
                                </div> 
                            </div>
                            <div className='sp'>
                                <div id='info' className={'blue ' + ( (visible) ? '' : 'invisible')}>
                                    <Ionicons className='small_medium-icon' name='IoInformationCircle' />
                                    <h3>{message}</h3>
                                </div>
                            </div>
                            <div className='green'>
                                <h3 className='h3'>login</h3>
                                <Ionicons className='medium-icon' name='IoLogIn' />
                            </div>
                            <div className='inputContainer'>
                                <input className={'input ' + (validEmail ? 'valid-input': 'invalid-input')} type='email' id='email' onInput={validator} placeholder='Email Address' required/>
                                <label className='inputLabel'>Email Address</label>
                            </div>
                            <div className='inputContainer'>
                                <input className={'input ' + (validPassword ? 'valid-input': 'invalid-input')} type='password'  id='password' onInput={validator} placeholder='Password' minLength={8} maxLength={12} />
                                <label className='inputLabel'>Password</label>
                            </div>
                            <div className='btn-box'>
                                <button className='btn'>login</button>
                            </div>
                            <div style={{width:'fit-content'}}>
                                <a href='#signup' className='ahref' >Don't have an account? Click here</a> 
                            </div>

                            
                        </form>
                    </div>
                </section>            
            </div>
            <CrossPlatform/> 
        </>
    );
}


  
export default Login;