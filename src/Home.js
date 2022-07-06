import React, {useEffect} from 'react';
import CommentList from './CommentList';
import './Main.css'
import { FaShare } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa';
import { IoRefreshCircle } from 'react-icons/io5';
// import { useEffect } from 'react/cjs/react.production.min';

const Home = ({ server, getdata, inputField, user, fullname, setFullname, routeChange, setData, loadAsync, setDialog })=> {
  
  const filtered= getdata.filter(comment=>{
    return comment.alias.toLowerCase().includes(inputField.toLowerCase()) || comment.message.toLowerCase().includes(inputField.toLowerCase())
  })

  function copyText(text){
    var text_area = document.createElement("textarea");
    text_area.value = text;

    text_area.style.top = "0";
    text_area.style.left = "0";
    text_area.style.position = "fixed";

    document.body.appendChild(text_area);
    text_area.focus();
    text_area.select();

    try{
      var successful = document.execCommand('copy');
      if(successful){
        //
      }else{
        //
      }
    } catch(err){
      console.log('failed to copy');
    }

    document.body.removeChild(text_area);
  }

  const getComments = async (user, setData, routeChange )=>{
    // if (! user) return;
    
    let res, data ;

    
    try{
      res = await fetch(server + 'home/' + user ,
          {
            method: 'GET',
            credentials: 'include',
          } );

      data = await res.json();
      
      if( !(fullname[0] && fullname[1]) ){ //'fullname' is not defined, possibly due to page refresh or other reasons 
        let value = await getUser(user);
        if(!value) throw new TypeError();  
      }
      
      console.log(data);
      if(data.status === 201){
        console.log('Comments loaded successfuly');
        
        console.log(data);

        setData(data['content']);
        
      }else if(data.status === 204){
        setData([]);
        //
        setTimeout(()=>{
          setDialog('No comments yet ','Share link with your friends and see their comments!');
        }, 1000);

      }else if(data.status === 401){
        // getting comments failed for auth reasons
        // clear cookies
        // on any action, switch to logout
        console.log(data)
        setTimeout(()=>{
          setDialog('Authentication error','Logging out...');
          setTimeout(()=>{
            routeChange('login');
          }, 500);
        }, 1000);
      }else{
        //getting comments failed for some reason
        console.log(data);
        setTimeout(()=>{
          setDialog('Failed to Load comments','Try again.');
        }, 1000);
      }
      
    }catch(err){
      console.log("Fetching error : ");
      console.log(err);
      setTimeout(()=>{
        setDialog('Failed to Load comments','Check network and try again.');
      }, 1000);
    }

  }

  const getUser = async (userid)=>{
    let res, user_data;
    try{
      res = await fetch(server + 'user/' + userid ,
        {
          method: 'GET',
          credentials: 'include',
        } );

      user_data = await res.json();
    
      console.log(user_data);
      
      if(user_data && user_data.status >= 200 && user_data.status < 300){
        setFullname([ user_data.firstname, user_data.lastname ]);
        return user_data.status;
      }else{
        return null;
      }

    }catch(err){
      console.log("Fetching error : ");
      console.log(err);

      return null;
    }
    
  }

  useEffect(()=>{
    //
    loadAsync(
      async ()=>{
          await getComments(user, setData, routeChange,);
      },
      1000
    );
  }, []);

  return (
    <>
    
      <section className='mainSect-alt bw'>
        <div className = 'row'>
          <img src='homer.png' className='about_img auto-bottom'/>
          <div className='mainPart'>
            <div className='conten'>
              <h3 className='spry_h1'>Check out your Comments</h3>
              <h3 className = 'h3r'>See what people have been saying about you.</h3>
              <div className='card'>
                <div className='marg'>
                  <div className='initCont'>
                    <div className='img'>
                        <img src = 'image-neutral.jpg' style = {{ height: '5rem', width: '5rem' }}/>
                    </div>
                    <h2>{fullname[0] + ' ' + fullname[1]}</h2>
                    <div className='edit-bt'></div>
                  </div>
                  <h3>What do you think of me? <br/> Say something about me</h3>
                  <div className='shrbx'>
                    <button className='btn' onClick = {()=>{
                      // generate link with username as query params
                      let share_link = window.location.origin + '?user=' + user + '#post' ;
                      //call share link intent or use copy-to-clipboard to store string
                      copyText(share_link);
                      setDialog('Copied to clipboard','You can now share your link with your friends!');
                    }} >Share link <FaShare className='small-icon center-icon'/></button>
                    <button className = 'btn'
                      onClick={()=>{
                        loadAsync(
                          async ()=>{
                              await getComments(user, setData, routeChange,);
                          },
                          1000
                        );
                      } }>Reload<IoRefreshCircle className='small-icon center-icon'/></button>
                  </div>                  
                </div>

              </div>
            </div>
            <div className = 'scroll'>
              <CommentList comments={filtered} value={inputField} />              
            </div>

          </div>          
        </div>


      </section>
      
    </>
  );
}



export default Home;