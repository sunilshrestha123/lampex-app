import React, { Component } from 'react';
import SearchBox from '../components/search-box/search-box';

class Hello extends Component {
  render() {
    return (
      <div>
        <SearchBox
          placeholder='please enter search'
          onChange={console.log('i love u')}
        />
      </div>
    );
  }
}

export default Hello;
