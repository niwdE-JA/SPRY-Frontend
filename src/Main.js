import React from 'react';
import './Main.css'

const Main = ({dialog_display})=> {

  //check 
  return (
    <>
      <section className='loadSect bw'>

        <div className = 'background-dim'>
            <div className = 'dialog load'>
              <div class="contain">
                  <div class="block one"></div>
                  <div class="block two"></div>
                  <div class="block three"></div>
                  <div class="block four"></div>
                  <div class="block five"></div>
              </div>
              <h3 className = 'h3r-alt tc'>
                  loading...
              </h3>
              <div className = 'regTxt' style = {{ paddingBottom: '1.5rem'}}>
                  <p className = 'tc' >please be patient while loading</p>
              </div>
            </div> 
        </div>

      </section>

    </>
  );
}
export default Main;