import React, {useEffect, useState} from 'react';
import './form.css'
import './register.css'
import Ionicons from './Ionicons';
import Mobile from './Mobile';

const Signup=({signup, loadAsync, } )=> {

    //might change this
//   useEffect(()=>{
//         setLoading(false);
//     }, []);

    
    const [error, setError] = useState('Invalid Username or Password');
    const [error_visible, setErrorVisibility] = useState(false);


    const [visible, setVisibility] = useState(false);
    const [validFirstname, setValidFirstname] = useState(true);
    const [validLastname, setValidLastname] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [validConfirm, setValidConfirm] = useState(true); 
    const [message, setMessage] = useState('Invalid Email or password'); 

    const validator = ()=>{
        let firstname = document.getElementById('firstname');
        let lastname = document.getElementById('lastname');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let confirm_password = document.getElementById('confirm_password');

        if(firstname.value === '' ){
            setValidFirstname(false);
        }else{
            setValidFirstname(true);
        }
        if(lastname.value === '' ){
            setValidLastname(false);
        }else{
            setValidLastname(true);
        }
        if(! email.checkValidity() || email.value === '' ){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
        if(password.value.length < 8 || password.value.length > 12 ){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
        if(confirm_password.value.length < 8 || confirm_password.value.length > 12 || confirm_password.value !== password.value){
            setValidConfirm(false);
        }else{
            setValidConfirm(true);
        }
        
        //
        if(firstname.value === '' ){
            setMessage("Please input a valid Firstname.");
            setVisibility(true);
        }else if(lastname.value === '' ){
            setMessage("Please input a valid Lastname.");
            setVisibility(true);
        }else if(! email.checkValidity() || email.value === '' ){
            setMessage("Please input a valid Email.");
            setVisibility(true);
        }else if(password.value.length < 8 || password.value.length > 12 ){
            setMessage('Password must be 8--12 characters');
            setVisibility(true);
        }else if(confirm_password.value !== password.value ){
            setMessage('Passwords do not match.');
            setVisibility(true);
        }else{
            setVisibility(false);
        }
        // return true;
    }

    
const signupHandler = (e)=>{
    e.preventDefault();// controversial
    //
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // let confirm_password = document.getElementById('confirm_password').value;
    
    
    
    if(firstname === '' || lastname === '' || email === '' || password === ''){
        validator();
    }else if(validFirstname && validLastname && validEmail && validPassword && validConfirm){
        loadAsync(
            async ()=>{
                await signup(firstname, lastname, email, password, logError );
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

        <div className='bod'>
            <section className='register bw'>
                <div className='halfsect'>
                    <form className='form' onSubmit={ signupHandler } >
                        <h3 className='h3'>Register</h3>
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
                        <div className='group'>
                            <div className='inputContainer'>
                                <input className={'input ' + (validFirstname ? 'valid-input': 'invalid-input')} type='text' id='firstname' onInput={validator} placeholder='First Name' />
                                <label className='inputLabel' >First Name</label>
                            </div>
                            <div className='inputContainer'>
                                <input className={'input ' + (validLastname ? 'valid-input': 'invalid-input')} type='text' id='lastname' onInput={validator} placeholder='Last Name' />
                                <label className='inputLabel'>Last Name</label>
                            </div>
                        </div>
                        <div className='inputContainer'>
                            <input className={'input ' + (validEmail ? 'valid-input': 'invalid-input')} type='email' id='email' onInput={validator} placeholder='Email Address' />
                            <label className='inputLabel'>Email Address</label>
                        </div>
                        <div className='group'>
                            <div className='inputContainer'>
                                <input className={'input ' + (validPassword ? 'valid-input': 'invalid-input')} id='password' type='password' onInput={validator} placeholder='Password' />
                                <label className='inputLabel' htmlFor='password'>Password</label>
                            </div>
                            <div className='inputContainer'>
                                <input className={'input ' + (validConfirm ? 'valid-input': 'invalid-input')} id='confirm_password' type='password' onInput={validator} placeholder='Confirm Password' />
                                <label className='inputLabel' htmlFor='confirm_password'>Confirm Password</label>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button className='btn'>Sign-up</button>
                        </div>
                    </form>
                </div>
                <div className='abouthalf'>

                    <h1 className='h1'> Register today with </h1>
                    <span className='spry_h1'>SPRY</span>

                    <h3 className='h3r'>see what people think of you</h3>
                    <div className='smallTxt'>
                        <div className='regTxt'>
                        <p>Create an account, Share your link with friends, Check the comments in your home, You'll never know who comments.</p>
                        </div>
                    </div>
                    <div className='btn-box'>
                        <a href = '#login' className='hollow'>login</a>
                    </div>
                </div>
            </section>      
        </div>
        
        <Mobile/>
        </>
    );
}


export default Signup;