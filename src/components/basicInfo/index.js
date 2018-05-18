import React from 'react';
import './style.less'

class BasicInfo extends React.Component {
    render() {
        const { basicInfo } = this.props;
        return (
            <div className="basic-container">
                <div className="text-info name">{basicInfo.name}</div>
                <div className="text-info description">{basicInfo.description}</div>
                <div className="text-info"><i className="school" />{basicInfo.university} · {basicInfo.major}</div>
                <div className="text-info"><i className="person" />{basicInfo.sex} · {basicInfo.education} · {basicInfo.graduateTime}</div>
                <div className="flex-info">
                    <div className="flex-ceil"><i className="phone" />{basicInfo.phone}</div>
                    <div className="flex-ceil"><i className="email" />{basicInfo.email}</div>
                </div>
            </div>
        )
    }
}
export default BasicInfo;