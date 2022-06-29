import React, {useEffect} from 'react';
import CommentList from './CommentList';
import './Main.css'
import { FaShare } from 'react-icons/fa'
// import { useEffect } from 'react/cjs/react.production.min';

const Home = ({getdata, inputField, user, routeChange, setData, loadAsync, setDialog })=> {
  
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

    let res, data;
    
    try{
      res = await fetch('http://localhost:8080/home/' + user ,
          {
            method: 'GET',
            credentials: 'include',
          } );

      data = await res.json();
    
      console.log(data);
      if(data.status === 201 ){
        console.log('Comments loaded successfuly');
        
        console.log(data);

        setData(data['content']);
        
      }else if(data.status === 204){

        setData([]);
      }else if(data.status === 401){
        // getting comments failed for auth reasons
        // clear cookies
        // on any action, switch to logout
        console.log(data)
        setDialog('Authentication error','Logging out...');
        routeChange('login');
      }else{
        //getting comments failed for some reason
        console.log(data);
        setDialog('Failed to Load comments','Try again.');
      }
      
    }catch(err){
      console.log("Fetching error : ");
      console.log(err);
      setDialog('Failed to Load comments','Check network and try again.');
    }

  }

  useEffect(()=>{
    //
    loadAsync(
      async ()=>{
          await getComments(user, setData, routeChange );
      },
      1000
    );
  }, []);

  return (
    <>
    
      <section className='mainSect bw'>

        <div className='mainPart'>
          <div className='content'>
            <div className='card'>
              <div className='initCont'>
                <div className='img'><img/></div>
                <h2>{user}</h2>
                <div className='edit-bt'></div>
              </div>
              <h3>What do you think of me?</h3>
              <div className='shrbx'>
                <button className='share' onClick = {()=>{
                  // generate link with username as query params
                  let share_link = window.location.origin + '/#post?user=' + user ;
                  //call share link intent or use copy-to-clipboard to store string
                  copyText(share_link);
                  setDialog('Copied to clipboard','You can now share your link with your friends!');
                }} >Share link <FaShare className='small-icon center-icon'/></button>
              </div>
            </div>
          </div>
          <CommentList comments={filtered} value={inputField} />
        </div>

      </section>
      
    </>
  );
}



export default Home;