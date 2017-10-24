import React, {Component} from 'react';
import AddTodo from './AddTodo';
import '../css/Modal.css';

class Modal extends Component {
  render() {
    return (
        <div className={this.props.visible ? 'modal -visible' : 'modal'}>
          <div onClick={() => this.props.hideModal()} className="modal-background">
          </div>
          <div className="modal-content">
            <AddTodo type={this.props.type} hideModal={this.props.hideModal} />
          </div>
        </div>
    );
  }
}

export default Modal;
