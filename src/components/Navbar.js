import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className='navbar-fixed'>
    <nav className='nav blue'>
        <div className="nav-wrapper">
            <div className='container'>
                <Link to='/' className="brand-logo" className='flow-text'>CATastrop</Link>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                    <i className="fa fa-bars hide-on-med-and-up"></i>
                </a>
                <ul className="right hide-on-small-only">
                    <li><a href="#about">About</a></li>
                    <li><a href="#video">Videos</a></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <ul className="side-nav collection hide-on-med-and-up" id="mobile-demo">
                <li>
                    <div className='user-view'>
                        <div class="background">
                            <img src={require("./img/night.jpg")}/>
                        </div>
                    </div>
                </li>
                <li className='collection-item'>
                    <Link to="/" className='waves-effect blue-text'>
                        <i class="fa fa-home fa-2x blue-text" aria-hidden="true"></i>
                    </Link>
                </li>   

                <li className='collection-item'>
                    <Link to="/#about" className='waves-effect blue-text'>About</Link>
                </li>

                <li className='collection-item'>
                    <Link to="/#video" className='waves-effect blue-text'>Videos</Link>
                </li>

                <li className='collection-item'>
                    <Link to="/contact" className='waves-effect blue-text'>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
);

export default Navbar;