import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = () => {

  return (
    <h4>My name is Rob, this is my first component</h4>
  );
}

//export default Greeting;
ReactDOM.render(<Greeting />, document.getElementById('root'));