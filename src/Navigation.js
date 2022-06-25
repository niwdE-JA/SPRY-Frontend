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
            // getRoute: getRoute,
        }

    }


    drop=()=>{
        this.setState({tgglState:'tgglist display'})
    }
    undrop=()=>{
        this.setState({tgglState:'tgglist'})
    }

    render(){
        return (
            <nav className='navbar'>
                <div className='navContent'>
                    <div className='title'>
                        <div className="box">
                            <div className="container">
                                <div className="ball"></div>
                                <div className="ball"></div>
                            </div>
                            <div className="container">
                                <div className="ball"></div>
                                <div className="ball"></div>
                            </div>
                        </div>
                        <h3>
                            spry
                        </h3>
                    </div>
                    <div className='listHolder'>
                        <div className='toggle' onMouseEnter={this.drop} onMouseLeave={this.undrop}>
                            <p className='toggler'>...</p>
                            <ul className={this.state.tgglState}>
                                <Navitems 
                                    route = {this.props.route}
                                    logged = {this.props.loggedin}
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
