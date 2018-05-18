import React from 'react';
import './style.less'

class Companies extends React.Component {
    render() {
        const { dataList } = this.props;
        return (
            <div>
                {
                    dataList.map(it => {
                        return (
                        <div className="company-container">
                            <div className="company-title">{it.title}</div>
                            {
                                it.dataList.map(item => {
                                    return (
                                        <div className="company-list">
                                            <div className="company-name">
                                                <span className="table-name">
                                                    · {item.name} { item.link ? <i className="link"></i>:''}
                                                </span>
                                                <small><i>{item.time}</i></small>
                                            </div>
                                            <div className="company-job">
                                                <span>{item.job}</span>
                                                <span className="flex-loca"><i className="location" /><div>{item.location}</div></span>
                                            </div>
                                            <div className="company-exe">
                                                {item.description}
                                            </div>
                                        </div>)
                                })
                            }
                        </div>)
                    })
                }
            </div>
        )
    }
}
export default Companies;