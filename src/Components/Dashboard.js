import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
// import SurveyList from '../Surveys/List';
import Icecreamlist from './icecreams/icecreamlist'
import varieties from './icecreams/varieties'

class Dashboard extends Component {



  // const options = [
  //   { label: 'Thing 1', value: 1},
  //   { label: 'Thing 2', value: 2},
  // ];

  render(){
    // console.log(varieties[1]);
  return (
    <div >

    <h2 className='center'>List</h2>
    <Icecreamlist varieties= {varieties}/>
]


      <div className="fixed-action-btn">
         <Link to="/icecreams/kart" className="btn-floating btn-large red">
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
    </div>
  );
}
};

export default Dashboard;
