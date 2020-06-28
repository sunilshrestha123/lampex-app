import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/sidebar.component';

class SideBarPage extends Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3002/api/category')
      .then((response) => response.json())
      .then((category) => this.setState({ categorys: category }));
  }

  render() {
    // const data = this.state.categorys.map((category) => (
    //   <li>{category.ct_name}</li>
    // ));
    return <Sidebar categorys={this.state.categorys} />;
  }
}

export default SideBarPage;
