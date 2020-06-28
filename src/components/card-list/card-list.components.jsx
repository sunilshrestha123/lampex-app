import React from 'react';

const Cardlist = (props) => {
  console.log(props);
  return (
    <div>
      {props.monsters.map((detail) => (
        <p>
          {detail.name} <h3>{detail.phone}</h3>
          <h3>{detail.address.city}</h3>
        </p>
      ))}
    </div>
  );
};

export default Cardlist;
