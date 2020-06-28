import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../img/rss.svg';
const Navbar = ['home', 'men', 'women'];
const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <h1>Digicast</h1>
        </Link>
      </div>

      <div className='options'>
        <Link className='option' to='/home'>
          Home
        </Link>
        <Link className='option' to='/home'>
          Product
        </Link>

        <Link className='option' to='/home'>
          Solutions
        </Link>

        <Link className='option' to='/home'>
          Contact-Us
        </Link>
        <Link className='option' to='/about'>
          About-Us
        </Link>
        <Link className='option' to='/signin'>
          SIGN-IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
