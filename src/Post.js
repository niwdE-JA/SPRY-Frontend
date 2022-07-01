import React from 'react';
import Ionicons from './Ionicons'
import './Main.css'
import './post.css'

const Post = ({loadAsync, setDialog})=> { 

    const reply = async ()=>{
        
        let reply_message = document.getElementById('reply-message').value;
        let user = getParameterByName('user');
        let firstname = ['John', 'Jane'][Math.round(Math.random(0, 1) )] ;
        let body = {
            alias: firstname + ' Doe', //randomly generated?... probably better to do that on the backend
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
                    document.getElementById('reply-message').value = '';
                    setTimeout(()=>{
                        setDialog('Message sent succesfully.', 'Your friend should see your message ASAP!');
                      }, 1000);
            
                }else if(data.status === 401){
                    console.log('post failed due to auth reasons');
                    setTimeout(()=>{
                        setDialog('Error:  Failed to send message.', 'Authentication error.');
                      }, 1000);
                }else{
                    console.log( 'post failed for some reason');
                    setTimeout(()=>{
                        setDialog('Error:  Failed to send message.', 'Unexpected error.');
                      }, 1000);
                } 
            }else{
                console.log('unexpected error');
                setTimeout(()=>{
                    setDialog('An unexpected error occured', 'Message may not have been sent');
                  }, 1000);
            }
        }catch(err){
            console.log("Errorrrr");
            console.log(err);
            //show error dialog
            setTimeout(()=>{
                setDialog('An unexpected error occured', 'Message may not have been sent');
              }, 1000);
        }

    }

  return (
      <>
      
        <section className='mainSect bw'>
            <div className = 'row'>
                <img src='posts.png' className='about_img'/> 
                <div className='mainPart'>
                    <div className='conten'>
                        <h3 className='h3r post'>Post a comment</h3>
                        <h3 className = 'lower'>let them know what you think</h3>
                        <div className='card'>
                            <div className='initCont'>
                                <div className='img'>
                                    <img src = 'image-neutral.jpg' style = {{ height: '5rem', width: '5rem' }}/>
                                </div>
                                <h2>{getParameterByName('user')}</h2>
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
            </div>

        </section>

      </>
    
  );


}

function getParameterByName(name, url = window.location.href){
    name = name.replace(/[\[\]]/g, '\\$&' );
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)' ),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


export default Post;