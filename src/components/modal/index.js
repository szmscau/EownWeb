import React from 'react';
import './style.less'


class Modal extends React.Component {
    state = {
        modalState: 0,
        modalClass: [
            'modal-content show',
            'modal-content hide'
        ],
        show : false
    }
    hideModal(e) {
        e.preventDefault(); //阻止事件默认事件,但还是会冒泡;
        e.stopPropagation(); //webkit内核可用,阻止冒泡;
        // this.content.className = "modal-content hide";
        this.setState({
            modalState:1
        })
        this.timer = setTimeout(() => {
            let self = this;
            // self.modal.style.display = 'none';
            self.setState({
                show : false
            })
        }, 500)
    }
    componentWillReceiveProps(newProp){
        let { show }  = this.state;
        this.setState({
            show:newProp.show,
            modalState:0,
        })
    }
    handleClick(e) {
        e.preventDefault(); //阻止事件默认事件,但还是会冒泡;
        e.stopPropagation(); //webkit内核可用,阻止冒泡;
    }
    render() {
        // const { show } = this.props
        const { show , modalClass, modalState } = this.state;
        let display = show ? "block" : "none";
        console.log(2);
        return (
            <div className='modal-container' style={{ 'display': display }} onClick={this.hideModal.bind(this)} ref={(modal) => { this.modal = modal }}>
                <div className={modalClass[modalState]} onClick={this.handleClick} ref={(modal) => { this.content = modal }}>
                </div>
            </div>
        )
    }
}

export default Modal;