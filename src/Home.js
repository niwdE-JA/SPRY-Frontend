import React, {useEffect} from 'react';
import CommentList from './CommentList';
import Main from './Main';
import './Main.css'
import { FaShare } from 'react-icons/fa'
// import { useEffect } from 'react/cjs/react.production.min';

const Home = ({getdata, inputField, user, routeChange, setData, loading, loadAsync })=> {
  
  const filtered= getdata.filter(comment=>{
    return comment.alias.toLowerCase().includes(inputField.toLowerCase()) || comment.message.toLowerCase().includes(inputField.toLowerCase())
  })


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
    {
      (loading )?
      <Main/>
      :
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
                  //get current user
                  let share_link = window.location.origin + '/#post?user=' + user ;
                  // generate link. ('#post-' + user)
                  // 'post' route, gets the current user from link, and saves it in state to use in 'answer' function
                  
                }} >Share link <FaShare className='small-icon center-icon'/></button>
              </div>
            </div>
          </div>
          <CommentList comments={filtered} value={inputField} />
        </div>

      </section>
    }
    </>
  );
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
      console.log('Comments refreshed successfuly');
      
      console.log(data);

      setData(data['content']);
      
    }else if(data.status === 204){

      setData([]);
    }else if(data.status === 401){
      // getting comments failed for auth reasons
      // clear cookies
      // on any action, switch to logout
      console.log(data)
      routeChange('login');
    }else{
      //getting comments failed for some reason
      console.log(data);
    }
    
  }catch(err){
    console.log("Fetching error : ");
    console.log(err);
  }


}



export default Home;