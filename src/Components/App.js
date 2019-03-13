import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Kart from './icecreams/Kart';


class App extends Component  {
  componentDidMount() {     //ajax request perfect location
    this.props.fetchUser();         //calling action creator
  }

render() {
  return (<div >
  <BrowserRouter>
  <div className = 'container'>
    <Header />
    <Switch>
    <Route exact={true} path = '/' component={Landing} />
    <Route exact={true} path = '/icecreams/kart' component={Kart} />
    <Route exact path = '/icecreams' component={Dashboard} />
    </Switch>
     </div>
  </BrowserRouter>
    </div>
  )
}
}

export default connect(null, actions)(App);
