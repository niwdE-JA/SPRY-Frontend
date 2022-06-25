import './App.css';

const Footlist=({route, loggedin, })=> {
  let nav_list= [];

  let loggedin_list = ['home', 'log out', 'about' ];
  let loggedout_list = ['login', 'signup', 'about' ];

  if (loggedin){
    nav_list = loggedin_list;
  }else{
    nav_list = loggedout_list;
  }
  
  console.log( 'Current route is : ' + route );



  return (
    <>
        {
        nav_list.map((user, i)=>{
          let goto_route = (nav_list[i] ===  'log out')? 'login' : nav_list[i] ;
          
          return(
              <li key={i} >     
                  <a href={'#'+ goto_route } >
                  {nav_list[i]}
                  </a>
              </li>  
          )
        }
        )}
    </>
  );
}

export default Footlist;

