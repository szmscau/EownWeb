import React from 'react';
import './style.less'
import person from '../../asset/img/person.jpg'

class Header extends React.Component {
    render(){
        return (
            <div className="header-container">
                    <img className="person-img" src={person}/>
            </div>
        )
    }
}
export default Header;