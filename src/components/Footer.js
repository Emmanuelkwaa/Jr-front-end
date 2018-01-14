import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id='footer' class="page-footer blue">
    <div class="container">
      <div class="row">
        <div class="col m6 s9"> 
          <h4 className='flow-text' >CATastrop</h4>
        </div>
          <ul>
            <li className='col m1 offset-m3 s1' ><a href="#!"><i class="fa fa-facebook-official " aria-hidden="true"></i></a></li>
            <li className='col m1 s1' ><a href="#!"><i class="fa fa-instagram " aria-hidden="true"></i></a></li>
            <li className='col m1 s1' ><a href="#!"><i class="fa fa-twitter " aria-hidden="true"></i></a></li>
          </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2014 Copyright Text
      </div>
    </div>
  </footer>
  );
  
  export default Footer;