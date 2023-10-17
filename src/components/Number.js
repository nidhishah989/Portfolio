// import React, { Component } from 'react'

// export class Number extends Component {

//     constructor(){
//         super()
//         this.state = {
//             number : 0
//         }
//     }

//     increaseNumber = ()=>{
//         this.setState({
//             number: this.state.number + 1
//         });
//     };

//   render() {
//     return (
//       <div>
//         <h1>NUmber: {this.state.number}</h1>
//         <button onClick={this.increaseNumber}> Increase Number</button>
//       </div>
//     );
//   }
// }

// export default Number


//functional component
import React, { useState } from 'react';

function Number() {
  // Step 1: Initialize the state with an initial value (e.g., 0).
  const [number, setNumber] = useState(0);

  // Step 2: Create a function to update the state.
  const increaseNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      {/* Step 3: Trigger the function when needed, e.g., on button click. */}
      <button onClick={increaseNumber}>+</button>
    </div>
  );
}

export default Number;