import React from 'react';
import ReactDOM from 'react-dom';

class Ts extends React.Component {
    render(){ // Every react component has a render method.
      return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
        <div>
          Hello World Test2
        </div>
      );
    }
  }
export default Ts;