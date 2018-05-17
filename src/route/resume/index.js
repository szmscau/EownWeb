import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header'
import './style.less'

class Resume extends React.Component {
    render() { // Every react component has a render method.
        return (
            <div className="resume-container">
                <div className='title'>
                    <h1  >lighing</h1>
                    <h2  >一只想吃鱼的猪。^(*￣(oo)￣)^</h2>
                </div>
                <div className="resume-bg">
                    <div className='resume-content' >
                        <Header />
                    </div>
                </div>
            </div>
        );
    }
}
export default Resume;