import React from 'react';
import moment from "moment";

class Timer extends React.Component {
    state={
        date: moment().date(),
        month: moment().month(),
        timer: moment().format('HH:mm'),
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
          ],
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
    render() { 
        const { date, month, timer, monthUs } = this.state;
        let monthU = monthUs[month];
        return (
            <div className="timer">
                <div className="timer-month">{monthU}
                    <div className="timer-day">
                        {date} <sup>th</sup></div>
                </div>
                <div className="timer-time">
                    {timer}
                </div>
            </div>
        )
    }
}

export default Timer;