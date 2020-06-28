import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { GetCategory } from './services/category';
import Header from './components/navbar/navbar.components';
import Footer from './components/footer/footer.component';
import Aboutus from './components/about-us/about-us.component';
import Contactus from './page/contactus/contactus.components';
import Homepage from './page/homepage/homepage.component';
import PageNotFound from './components/pagenotfound/pagenotfound.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ['Electonics', 'phone', 'men'],
    };
  }

  // async componentDidMount() {
  //   try {
  //     const result = await GetCategory();
  //     console.log('my category', result);
  //     this.setState({ category: result.category });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  render() {
    const data = this.state.category.map((items) => <h1>{items}</h1>);
    return (
      <div className='App'>
        {/* <div>hello</div> */}
        <Header />
        {/* <Slider></Slider> */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route exact path='/' component={ImageSlide} />
          <Route path='/shop' component={ShopPage} /> */}
          {/* <Route path='/client' component={Client} /> */}
          <Route path='/contactus' component={Contactus} />
          <Route path='/aboutus' component={Aboutus} />
          {/* <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' component={login} />
        <Route exact path='/category' component={Catgory} /> */}{' '}
          <Route component={PageNotFound} />
        </Switch>
        <div>{data}</div>

        <Footer data />
      </div>
    );
  }
}

export default App;
