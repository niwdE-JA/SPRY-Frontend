import './App.css'
import Navigation from "./Navigation"
import Footer from "./Footer"
import Main from './Main'
import Home from "./Home"
import Signup from "./signup"
import Login from "./login"
import About from "./about"
import Post from './Post'
import Error from './Error'
import React from 'react'
import { getdata } from './getdata'

// test 'Access-Control-Allow-Origin' to see if ports are accounted for.
// Make 'post' use proper dates
// Restrict the cookie check go specific routes
// Mistake: switching from onClick to onHashChange
// Build Error logger (logError() )
// consider including routechange in login, to avoid bugs from redirection.
// consider calling 'logout' from 'signup' route too!
// consider changing error logging system to be more passive, and include message from server --involves server
// remember to restructure and modularize this codebase
// create id system for 'post' link --involves server// restructure database on server to match this

// make 'share' button work
// update 'Home' to use 'loadAsync'

// update 'Home' to use User's names 
//call 'getComments' everytime an action(w/ event listeners) is performed on home. Use this to replace problematic setInterval

class App extends React.Component {
  constructor(){
    super()
    this.state={
      route: '',
      getdata: [], // cached
      inputField: '',
      user: '',//cookie
      loading: false,
      loggedin : false, //cookie
      error: false,
    }

    window.addEventListener('hashchange', this.router ) ;
  }

  router = ()=>{
    let hash_route = window.location.href.split('#')[1];
    this.routeChange(hash_route);
  }

  
  componentDidMount(){
    //
    this.loadAsync(this.loader, 2000);
  }

  loadPage = ()=>{
    this.loadAsync(this.loader, 2000);
  }
   
  loadAsync = (callback, timer)=>{
    this.setLoading(true);
    const timeout_promise = new Promise((resolve, reject)=>{
      setTimeout(resolve, timer);
    } ); //A promise-based timer.
    
    Promise.all([callback() , timeout_promise])
    .then( (res)=>{
      this.setLoading(false);
    });
  }

  loader = async ()=>{
    //
    let loggedin = this.getCookie('loggedin');
    let user = this.getCookie('user');
    let route = this.getHashRoute();
    route = !(route) ? 'login': route;// if entry route is empty, use 'login' as landing route

    //First, handle invalid routes...
    if( !(route in {'home': 0, 'login': 0, 'signup': 0, 'post': 0, 'about': 0, } ) ){
      return this.setState({error: true});
    }
    if(route in {'login' : 0, 'signup' : 0, 'about' : 0, 'post' : 0} ){
      // Avoids checking for cookies, where they're not needed, or where they're dangerous(as in 'post')
      this.routeChange(route);
    }else if(user && (loggedin === 'true') ){
      //Handles case where cookies are found
      this.setState({user: user, loggedin: true});
      this.routeChange(route);
      console.log("cookies were found");
    } else{ // When cookies are NOT found
      this.setState({user: '', loggedin: false});
      this.routeChange('login');
      console.log("cookies were NOT found");
    }

  }


  getCookie(key){
    let output_value = document.cookie.replaceAll(' ', '').split(';').find(key_value=>key_value.startsWith(key));
    
    output_value = (output_value)? output_value.split('=')[1]: null;

    return output_value;
  }

  setCookie(cookie_object, maxAgeSeconds){
    // do a little Type checking
    for(let key in cookie_object){
      let value = cookie_object[key];
      document.cookie = key + '=' + value + ';max-age=' + maxAgeSeconds;
    }
  }

  getHashRoute = ()=>window.location.href.split('#')[1];



  routeChange= (route)=>{
    //First, handle invalid routes...
    if( !(route in {'home': 0, 'login': 0, 'signup': 0, 'post': 0, 'about': 0, }) ){
      return this.setState({error: true});
    }else{
      this.setState({error: false});
    }
    
    //
    if(route === 'login' || route === 'signup' ){
      this.logOut()
    }

    let before = this.state.route;
    
    if( route === before){
      //user attempts to route to a route they're already on
      console.log('you are already here!');
      return;
    }

    //
    this.setState({route: route });

    if(this.getHashRoute() !== route ){
      //special case when 'routeChange' is not called from hashChange
      window.location.href = "#"+ route;
    }

  }
  
  setData=(data)=>{
    this.setState({getdata: data});
  }

  setLoading = (bool)=>{
    console.log('loading is now ' + bool)
    this.setState({loading: bool});
  }
  

  logOut = ()=>{
    //clear local cookies
    this.setCookie(
      {
        'user':'',
        'loggedin':'',
        'connect.sid':''
      },  1);
    
    this.setState({loggedin: false});

    //send logout request asynchronously
    fetch('http://localhost:8080/logout' ,
    {
        method: 'GET',
        credentials: 'include',
    }
    )
    .then((res)=> res.json() )
    .then((data)=> console.log(data) )
    .catch((err)=>{
        console.log("Errorrrr");
        console.log(err);
        // console.log(body);
    });
  
  }

  searChange=(event)=>{
    this.setState({inputField: event.target.value} );
  }

  login = async (email, password, logError)=>{

    let body = {
      email,
      password
    }

    let res, data;
    try{
      res = await fetch('http://localhost:8080/signin',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) ,
      } );

      data = await res.json();
      
      console.log(data);
      if(data ){
        // check status to determine success: if 201, set user and change route
        if(data.status === 201){
          console.log('successful login');
          
          this.setState({user: data.user, loggedin: true});
          //set cookie to have logged in value
          // setCookie({cookie_object}, maxAgeSeconds);
          this.setCookie(
            {
              'user': data.user,
              'loggedin': 'true',
            },  60*60*24);
          this.routeChange('home');

        }else if(data.status === 401){
            console.log('login failed due to auth reasons');
            logError('login failed due to auth reasons');
            this.routeChange('login'); //To handle signup case where 'login' is called from 'signup'. This is a no-op is route is already on 'login' 
            // set cookie to have loggedout value
        }else{
            console.log( 'login failed for some reason');
            logError('login failed for some reason');
            this.routeChange('login'); //To handle signup case where 'login' is called from 'signup'. This is a no-op is route is already on 'login' 
        }

      }else{
        logError('Invalid username or password');
        this.routeChange('login'); //To handle signup case where 'login' is called from 'signup'. This is a no-op is route is already on 'login' 
      }

    }catch(err){
      console.log("Error logging in : Please check your internet connection and try again.");
      console.log(err);
      //
      logError('Invalid username or password');
      this.routeChange('login'); //To handle signup case where 'login' is called from 'signup'. This is a no-op is route is already on 'login' 
    }

  }

  signup = async (firstname, lastname, email, password, logError )=>{
    //
    let body = {
      firstname,
      lastname,
      email,
      password,
    }

    let res, data;

    res = await fetch('http://localhost:8080/register',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) ,
    } );

    data = await res.json() ;

    try{ 
        if(data){
          if(data.status === 201){
            console.log('successful signup')
            //goes on to login with created credentials...
            this.login(email, password, (error_message)=>{});

          }else if(data.status === 401){
            console.log('signup failed due to auth reasons');
            logError('signup failed due to auth reasons');
          }else{
            console.log( 'signup failed for some reason');
            logError('signup failed for some reason');
          }
          
        }else{
          logError('signup failed for some reason');
        }
        
     }catch(err){
        console.log("Error : ");
        console.log(err);
        logError( 'Error: Please check your connection.' );
     }
  
  }


  // logError = (message, callback)=>{
  //     callback(message);
  // }

  render(){
      return (
        <>
          <Navigation 
            route= {this.state.route} 
            loggedin= {this.state.loggedin}
            searChange={this.searChange} />

          {
          (this.state.error)?
          <Error
            reload = {this.loadPage}
          />
          :(this.state.route === 'login')?
          <Login
           login = {this.login}
           loadAsync = {this.loadAsync}
           loading = {this.state.loading}
           />

          :(this.state.route === 'home')?
          <Home
           routeChange={this.routeChange}
           loadAsync = {this.loadAsync}
           loading= {this.state.loading}
           getdata= {this.state.getdata}
           setData= {this.setData}
           user= {this.state.user}
           inputField={this.state.inputField}
           />

          :(this.state.route === 'about')?
          <About/>

          :(this.state.route === 'post')?
          <Post
           loadAsync = {this.loadAsync}
           loading= {this.state.loading}
          />

          :(this.state.route === 'signup')?
          <Signup
           signup = {this.signup}
           loading = {this.state.loading}
           loadAsync = {this.loadAsync}
          />

          :<Main/>

          }
          {/* <Error/> */}
          <Footer
            route= {this.state.route} 
            loggedin= {this.state.loggedin}
          />

        </>
      );
    }
  }



export default App;
