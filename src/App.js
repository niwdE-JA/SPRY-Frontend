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
import Dialog from './Dialog'
import React from 'react'

// test 'Access-Control-Allow-Origin' to see if ports are accounted for.
// consider changing error logging system to be more passive, and include message from server --involves server
// remember to restructure and modularize this codebase
// Use secure cookies
// make submit button dull for invalid form

//call 'getComments' everytime an action(w/ event listeners) is performed on home. Use this to replace problematic setInterval


class App extends React.Component {
  server = 
  (window.location.origin === 'https://spry-anonymous.herokuapp.com')?
  'https://spry-anonymous.herokuapp.com/' : 
  'http://localhost:8080/';
  
  constructor(){
    super()
    this.state = {
      route: '',
      getdata: [], // cached
      inputField: '',
      user: '',//cookie
      fullname: ['', ''],
      loading: false,
      loggedin : false, //cookie
      error: false,
      dialog_display: false,
      message : 'Dialog message goes here',
      description: 'Details of the message',
    }

    window.addEventListener('hashchange', this.router ) ;
  }


  setDialog = (message, description ) => {
    this.setState({ message, description, dialog_display: true } );
  }
  setFullname = (fullname)=>{
    this.state.fullname = fullname;
  }

  router = () => {
    let hash_route = this.getHashRoute();
    this.routeChange(hash_route);
  }

  
  componentDidMount(){
    //
    this.loadAsync(this.loader, 2000);
  }


  loadAsync = (callback, timer) => {
    this.setLoading(true);
    const timeout_promise = new Promise((resolve, reject)=>{
      setTimeout(resolve, timer);
    } ); //A promise-based timer.
    
    Promise.all([callback() , timeout_promise])
    .then( (res) => {
      this.setLoading(false);
    });
  }
  
  loader = async () => {
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
    // let output_value = document.cookie.replace(' ', '').split(';').find(key_value=>key_value.startsWith(key));
    function replaceAll(a, b, c){// because 'replaceAll()' is not defined in Edge
      while (a.includes(b) ){
        a = a.replace(b, c);
      }
      return a;
    }

    let output_value = replaceAll( document.cookie, ' ', '').split(';').find(key_value=>key_value.startsWith(key));

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

  getHashRoute = () => {
    let hash = window.location.href.split('#')[1]; // separates hash
    return hash;
  }


  routeChange= (route) => {
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

    window.scroll(0,0);

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
    
    this.setState({loggedin: false, user: '', fullname: ['',''], getdata: [] });

    //send logout request asynchronously
    fetch(this.server + 'logout' ,
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
      res = await fetch(this.server + 'signin',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body) ,
      } ); // logs in and creates session

      data = await res.json();
      
      console.log(data);
      if(data ){
        // check status to determine success: if 201, set user and change route
        if(data.status === 201){
          console.log('successful login');
          
          this.setState({user: data.user, fullname: [ data.firstname, data.lastname ], loggedin: true});
          //set cookie to have logged in value
          // setCookie({cookie_object}, maxAgeSeconds);
          this.setCookie(
            {
              'user': data.user,
              'loggedin': 'true',
            },  60*60*24);
          this.routeChange('home');

        }else if(data.status === 401){
            console.log('Invalid username or password');
            logError('Invalid username or password');
            this.routeChange('login'); //To handle signup case where 'login' is called from 'signup'. This is a no-op is route is already on 'login' 
            
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
      logError('Error: Please check your connection.');
      setTimeout(()=>{
        this.setDialog('Failed to login','Check network and try again.');
      }, 1000);
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

    res = await fetch(this.server + 'register',
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
        setTimeout(()=>{
          this.setDialog('Failed to register','Check network and try again.');
        }, 1000);
     }
  
  }



  prompt_up = () => {
    this.setState( {dialog_display: true } );

  } // to display the dialog box

  prompt_down = () => {
    this.setState( {dialog_display: false } );
    
  } // to close the dialog box



  render(){
      return (
        <>
          <>
            <Navigation 
              route= {this.state.route} 
              loggedin= {this.state.loggedin}
              searChange={this.searChange} />
          
            {
            (this.state.error)?
            <Error />
            :(this.state.route === 'login')?
            <Login
              login = {this.login}
              loadAsync = {this.loadAsync}
            />
            :(this.state.route === 'home')?
            <Home
            server = {this.server}
            routeChange={this.routeChange}
            loadAsync = {this.loadAsync}
            getdata= {this.state.getdata}
            setData= {this.setData}
            user= {this.state.user}
            fullname= {this.state.fullname}
            setFullname= {this.setFullname}
            inputField={this.state.inputField}
            setDialog= {this.setDialog}
            />

            :(this.state.route === 'about')?
            <About />

            :(this.state.route === 'post')?
            <Post
            server = {this.server}
            loadAsync = {this.loadAsync}
            setDialog= {this.setDialog}
            />

            :(this.state.route === 'signup')?
            <Signup
            signup = {this.signup}
            loadAsync = {this.loadAsync}
            />
            :<Main/>

            }
            
            <Footer
              route= {this.state.route} 
              loggedin= {this.state.loggedin}
            />
            {
            (this.state.dialog_display)?
            <Dialog
              unprompter = {this.prompt_down}
              message = {this.state.message}
              description = {this.state.description}
            />
            :<></>
            }

          </>  
          {
            (this.state.loading)?
            <Main/>
            :<></>
          }                
        </>


      );
    }

}


export default App;