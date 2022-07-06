import React from 'react';
import Navitems from './navitems';
import Ionicons from './Ionicons'
import './Navigation.css'


class Navigation extends React.Component {

    // CHANGERS

    constructor(){
        super()
        this.state={
            tgglState:'tgglist',
            top: '',
            center : '',
            bottom : ''
        }

    }


    toggle=()=>{
        if ( this.state.tgglState == 'tgglist' ){
            this.setState({tgglState:'tgglist display', top:'top', center: 'center', bottom: 'bottom'})
        }
        else{
            this.setState({tgglState:'tgglist', top:'', center: '', bottom: ''})
        }      
    }
    

    render(){
        return (
            <nav className='navbar'>
                <div className='navContent'>
                    <div className='title'>
                        <div className="box">
                            <div class="flat"></div>
                            <div class="flat middle"></div>
                            <div class="flat"></div>
                        </div>
                        <h3>
                            spry
                        </h3>
                    </div>
                    <div className='listHolder'>
                        <div className='toggle'>
                            <div>
                                {
                                (this.props.route === 'home'  )?
                                <div >
                                    <input className='search-alt' placeholder='Search comments...' maxLength='15' onChange={this.props.searChange} />
                                    <button className='click-alt' onClick={()=>{console.log("Fire, baby.")}}><Ionicons className='small_medium-icon center-icon' name='IoSearch' /></button>
                                </div>
                                :<></>
                                }
                            </div>                            
                            <div className='toggler' onClick={this.toggle}>
                                <div class={`slim ${ this.state.top }`}></div>
                                <div class={`slim cent ${ this.state.center }`}></div>
                                <div class={`slim ${ this.state.bottom }`}></div>
                            </div>

                            <ul className={this.state.tgglState}>
                                <Navitems 
                                    route = {this.props.route}
                                    loggedin = {this.props.loggedin}
                                    toggle = {this.toggle}
                                    toggled = 'toggled'
                                />
                            </ul>
                        </div>
                        <ul className='list'>
                            <Navitems 
                                route = {this.props.route}
                                loggedin = {this.props.loggedin}
                                toggled = ''
                            />
                            {
                            (this.props.route === 'home'  )?
                            <li >
                                <input className='search' placeholder='Search comments...' maxLength='15' onChange={this.props.searChange} />
                                <button className='click' onClick={()=>{console.log("Fire, baby.")}}><Ionicons className='small_medium-icon center-icon' name='IoSearch' /></button>
                            </li>
                            :<></>
                            }
                        </ul>
                    </div>
                    
                </div>
            </nav>
          );
    }

}

export default Navigation;
