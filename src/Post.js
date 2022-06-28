import React from 'react';
import Ionicons from './Ionicons'
import './Main.css'
import './post.css'

const Post = ({loadAsync })=> { 
  return (
      <>
      
        <section className='mainSect bw'>
            <div className='mainPart'>
                <div className='conten'>
                    <h3 className='h3r post'>Post a comment</h3>
                    <h3 className = 'lower'>let them know what you think</h3>
                    <div className='card'>
                        <div className='initCont'>
                            <div className='img'><img/></div>
                            <h2>john doe</h2>
                            <div className='edit-bt'></div>
                        </div>
                        <h3>What do you think about me? I'll never know it's you</h3>
                    </div>
                    <div className='cnt'>
                        <div className='txtbox'>
                            <textarea id='reply-message' type='text' placeholder='Message' className='inp'/>
                        </div>

                        <a className='shSnt snd' onClick={ ()=>{loadAsync( reply, 1000 )}} >
                            <Ionicons className={'small_medium-icon'} name='IoSend' />
                        </a>
                    </div>
                </div>

            </div>
        </section>

      </>
    
  );
}


const reply = async ()=>{
    
    let reply_message = document.getElementById('reply-message').value;
    let user = getParameterByName('user');

    let body = {
        alias: 'John Doe',//randomly generated?... probably better to do that on the backend
        message: reply_message,
        email: user, //username
        time: Date(),
    }

    let res, data;
    try{ 
        res = await fetch('http://localhost:8080/answer' ,
        {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) ,
        } );

        data = await res.json() ;

        if(data){
            console.log(data);
          if(data.status === 201){
            console.log('successful post');
    
          }else if(data.status === 401){
            console.log('post failed due to auth reasons');
          }else{
            console.log( 'signup failed for some reason');
          } 
        }else{
            console.log('afagtrht')
        }
    }catch(err){
        console.log("Errorrrr");
        console.log(err);
        // console.log(body);
        //show error dialog
    }

    function getParameterByName(name, url = window.location.href){
        name = name.replace(/[\[\]]/g, '\\$&' );
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)' ),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}

export default Post;