import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments'
import Checkout from './Checkout';

class Header extends Component {
renderContent() {
  switch(this.props.auth) {
    case null:
      return;
    case false:
     return <li><a href='/auth/google'>Login with google</a></li>;


    default:
    console.log(this.props.auth.displayName);
      return [
        <li key ='etfvje' style={{ margin: '0 10px'}}>{this.props.auth.displayName} </li>,
        <li key='fjvjdfvr'><a href='/icecreams/checkout'><Checkout /></a></li>,
        <li key='jbfjkrbkjr'><a href='/api/logout'>logout</a></li>
      ]
  }
// }
}

// loginrender(){
//   switch(this.props.auth){
//     case false:
//     return <a href='/'>ICE-CREAMS</a>;
//
//     case true: return <a href='/icecreams'>ICE-CREAMS</a>;
//   }
// }
  render() {

  return(
    <nav className='blue'>

        <div className='nav-wrapper'>
        <Link to={this.props.auth ? '/icecreams' : '/'} className='left brand-logo'>
              ICE-CREAM
              </Link>

        <ul className='right'>
        {this.renderContent()}
        </ul>
        </div>

    </nav>
  );}
}

function mapStateToProps({ auth}) {
  return {auth};

}
export default connect(mapStateToProps)(Header);
