import React, { Component } from 'react';

class StickyNavbar extends Component {
  constructor() {
    super();
    this.state = {
      navebar: ['Home', 'Aboutus', 'Contact-us'],
    };
  }
  render() {
    const data = this.state.navebar.map((nav) => <li>{nav}</li>);

    return <div>{data}</div>;
  }
}

export default StickyNavbar;
