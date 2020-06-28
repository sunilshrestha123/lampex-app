import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/crown.svg';

import './navbar.styles.scss';

// import { FaAngleDown } from 'react-icons/fa';

const Header = ({ currentUser, hidden }) => (
  <div>
    <div className='top-header'>
      <div>image </div>
    </div>
    <div className='header'>
      <div className='options'>
        <Link className='option' to='/'>
          <h3>lampaex electronics</h3>
        </Link>
      </div>

      <div className='options'>
        <Link className='option' to='/'>
          HOME
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option'>
          PRODUCT
          {/* <FaAngleDown /> */}
          {/* <i className="fa fa-caret-down"></i>
        <div class="dropdown-content">
          <a href="#">{}</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a> 
        </div> */}
        </Link>
        <Link className='option' to='/contactus'>
          CONTACT US
        </Link>

        <Link className='option' to='/aboutus'>
          ABOUT US
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
