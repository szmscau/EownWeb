import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import './style.less'
class App extends React.Component {
  render() { // Every react component has a render method.
    return ( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        <div className='bg'></div>
        <div className='over'></div>
        <div className='container'>
          <div className='title'>
            <h1>Moving</h1>
            <h2>一只想吃鱼的猪。^(*￣(oo)￣)^</h2>
          </div>
          <div className="content">
            <ul>
                <li>
                <Link to="/test" id="introduce"></Link>
                </li>
                <li>
                <Link to="/test" id="blog">
                </Link>
                </li>
                <li>
                <Link to="/test" id="foot"></Link>
                </li>
                <li>
                <a href="mailto:shenzhiming999@126.com" id="email"></a>
                </li>
                <li>
                <Link to="/test" id="wechat"></Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;