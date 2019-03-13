import React, {Component} from 'react';
import Icecream from './icecream';
import varieties from './varieties';
class Kart extends Component {

  constructor(props) {
      super(props);

    const checkboxItems = [];

    varieties.map((name,i) => {
      // if(this.props.checkedItems.get(varieties[i].name)){
      checkboxItems.push(varieties[i]);
    // }
    });
    this.state = {
      kartItems: checkboxItems
    };
}
render(){
console.log(this.state.kartItems);
console.log(this.props);

  return(<div>
   <h2>jbdcs</h2>
    </div>
    // <div>
//     // {
//     //   this.state.kartItems.map((name, i) => {
//     //     return (
//     //       <Icecream
//     //         key={i}
//     //         id={this.state.kartItems[i].id}
//     //         img = {this.state.kartItems[i].img}
//     //         name={this.state.kartItems[i].name}
//     //         price={this.state.kartItems[i].price}
//     //         />
//     //
//     //
//     //
//     //
//     //
//     //     );
//     //   })
//     // }
// jsvhxj
//          </div>




)
}

}
export default Kart;
