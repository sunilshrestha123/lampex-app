import React from 'react';
import './pagenotfound.styles.scss';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className='pagenotfound'>
      <div className='mainbox'>
        <div className='err'>4</div>
        <i className='far fa-question-circle fa-spin'></i>
        <div className='err2'>4</div>
        <div className='msg'>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go{' '}
            <a>
              <Link to='/'>home</Link>
            </a>{' '}
            and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
