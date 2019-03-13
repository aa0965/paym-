import React, {Component} from 'react';
class Icecreams extends Component  {




    // {
    //       Checkboxes.map(item => (
    //         <label key={item.key}>
    //
    //           <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
    //         </label>
    //       ))
    //     }
render(){

  return(
    <div className='col-s6'>
      <img  alt='icecreams' src={this.props.img} height="200" width="200"/>
      <div>
        <h5>{this.props.name}</h5>
        <h5>{this.props.price}</h5>
        <label>
        <input type='checkbox' className="filled-in"
        name={this.props.name}
        checked={this.props.checked}
        onChange={this.props.handleChange} />

              <span>Add to cart</span>
            </label>
      </div>
    </div>
  );
}}


 export default Icecreams;
