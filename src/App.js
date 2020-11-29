import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar'
import About from './components/about'
import Store from './components/store'
import Contact from './components/contact'
import Essentials from './components/essentials'
import Cart from './components/cart'

import Allwatch from './components/allWatch'
import Watch from './components/watch'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Essentials />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/store" component={Store} />
            <Route path='/contact' component={Contact} />
            <Route path='/cart' component={Cart} />
            <Route path="/allWatch" component={Allwatch} />
            <Route path="/:watch_id" component={Watch} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
