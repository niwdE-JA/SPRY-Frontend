import React from 'react';
import './Main.css'

const Main = ()=> {

  //check 
  return (
    <>
      <section className='loadSect bw'>
          <h3 className='h3r'>please be patient while loading...</h3>
          <div className="newton_box">

            <div className="container_1">
              <div className="newton ball-1"></div>
              <div className="newton ball-3"></div>
            </div>
            <div className="container_2">
              <div className="newton ball-2"></div>
              <div className="newton ball-4"></div>
            </div>

          </div>

      </section>

    </>
  );
}
export default Main;