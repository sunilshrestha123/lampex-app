import React from 'react';

const Sidebar = (props) => {
  return (
    <div>
      {props.categorys.map((category) => (
        <li>{category.ct_name}</li>
      ))}
    </div>
  );
};

export default Sidebar;
