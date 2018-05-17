import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import moment from "moment";
import './style.less'
import Modal from '../../components/modal'
class App extends React.Component {
  state = {
    date: moment().date(),
    month: moment().month(),
    timer: moment().format('HH:mm'),
    temp:false,
    monthUs: [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May.',
      'June.',
      'July.',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.',
    ]
  }
  componentDidMount() {
    this.timeInter = setInterval(() => {
      let _this = this;
      let timer = moment().format('HH:mm');
      _this.setState({
        timer
      });
    }, 30000);
  }
  componentWillMount() {
    //發現計時器便清除
    this.timeInter && clearInterval(this.timeInter);
  }
  liClick(e){
    this.setState({
      temp:true
    });
    // console.log(this.state.temp);
  } 
  render() {
    const { date, month, timer, monthUs , temp} = this.state;
    let monthU = monthUs[month];
    return (
      <div>
        <div className='bg'></div>
        <div className='over'></div>
        <div className='container'>
          <div className='title'>
            <h1>lighing</h1>
            <h2>一只想吃鱼的猪。^(*￣(oo)￣)^</h2>
          </div>
          <div className="timer">
            <div className="timer-month">{monthU}
              <div className="timer-day">
                {date} <sup>th</sup></div>
            </div>
            <div className="timer-time">
              {timer}
            </div>
          </div>
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
                <a href="mailto:shenzhiming999@126.com" id="email"></a>
              </li>
              <li onClick={this.liClick.bind(this)}>
                <a id="wechat"></a>
                <Modal show={temp}/>
              </li>
            </ul>
          </div>
          <div className="sunshine"/>      
        </div>
      </div>
    );
  }
}
export default App;