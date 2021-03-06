import React from 'react';
import './menuitem.styles.scss';
const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className='menu-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'> {title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
