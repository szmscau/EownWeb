import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './style.less'
import Modal from '../../components/modal'
import Timer from '../../components/timer'

class App extends React.Component {
  state = {
    temp:false,
  }
  liClick(e){
    this.setState({
      temp:true
    });
    // console.log(this.state.temp);
  } 
  render() {
    const { temp} = this.state;
    return (
      <div>
        <div className='bg'></div>
        <div className='over'></div>
        <div className='container'>
          <div className='title'>
            <h1>lighing</h1>
            <h2>一只想吃鱼的猪。^(*￣(oo)￣)^</h2>
          </div>
            <Timer />
          <div className="content">
            <ul>
              <li>
                <Link to="/resume" id="introduce"></Link>
              </li>
              <li>
                <Link to="/test" id="blog">
                </Link>
              </li>
              <li>
                <Link to="/test" id="foot"></Link>
              </li>
              <li>
                <a href="https://github.com/szmscau" id="github"></a>
              </li>
              <li>
                <a href="mailto:shenzhiming999@126.com" id="email"></a>
              </li>
              <li onClick={this.liClick.bind(this)}>
                <a id="wechat"></a>
              </li>
            </ul>
          </div>
          <div className="sunshine"/>      
        </div>
        <Modal show={temp}/>
      </div>
    );
  }
}
export default App;