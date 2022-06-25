import './App.css';

import Ionicons from './Ionicons'


const Navitems=({route, loggedin, toggled})=> {
  let icon=['IoHome','IoLogIn','IoPeople',]//'information-circle', 'swap-horizontal', 'paper-plane', 'logo-facebook', 'logo-instagram', 'logo-whatsapp','send']
  // 
  
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
          let style = (goto_route === route) ? 'black' : '';
          return(
              <li key={i} className={style +' '+ toggled} onClick={()=>{ window.location.href = '#' + goto_route }}>
                    
                  <Ionicons className={style + 'y' +' '+ toggled} name={icon[i]} />
                        
                  <a >
                  {nav_list[i]}
                  </a>
              </li>  
          )
        })
        }
    </>
  );
}

export default Navitems;

// className={style + 'y' +' '+ toggled}