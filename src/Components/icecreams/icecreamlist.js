import React,{Component} from 'react';
import Icecream from './icecream';
import Kart from './Kart';

class icecreamlist extends Component  {

  constructor(props) {
      super(props);

      const checkboxItems = new Map();
    this.props.varieties.map(val => {
      checkboxItems.set(val.name, val.isChecked)
    });
    this.state = {
      checkedItems: checkboxItems
    };


      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }


render(){
  // console.log(this.props.varieties);
console.log(this.state.checkedItems.get(this.props.varieties[1].name));

const keys = Object.keys(this.state.checkedItems);
console.log(keys);

// var result = Object.keys(this.state.checkedItems).map(function(key) {
//   return [Number(key), this.state.checkedItems[key]];
// });
  return (<div>
    <div className='row'>
      {
        this.props.varieties.map((name, i) => {
          return (
            <Icecream
              key={i}
              id={this.props.varieties[i].id}
              img = {this.props.varieties[i].img}
              name={this.props.varieties[i].name}
              price={this.props.varieties[i].price}
              handleChange = {this.handleChange}
              checked = {this.state.checkedItems.get(this.props.varieties[i].name)}
              />





          );
        })
      }


    </div>
      <div className='container '>
        <Kart
         checkedItems = {this.state.checkedItems}
        />
      </div>
    </div>
  );
}
}

export default icecreamlist;
