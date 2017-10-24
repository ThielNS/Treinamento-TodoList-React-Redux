import React, {Component} from 'react';
import Modal from './Modal';
import '../css/ButtonAdd.css';

class ButtonAdd extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      type: '',
      toggle: false
    }
  }

  showModal(type){
    this.setState({modal: true, type});
    this.toggleTypes();
  }

  hideModal(){
    this.setState({modal: false});
  }

  toggleTypes() {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
        <div className="group-buttons">
          <Modal visible={this.state.modal} type={this.state.type} hideModal={this.hideModal.bind(this)} />
          <button className="button-add" onClick={() => this.toggleTypes()}>{this.state.toggle ? '-' : '+'}</button>
          <div className={this.state.toggle ? 'button-types -visible' : 'button-types'}>
            <button className="button-add -types" onClick={() => this.showModal('check')}>L</button>
            <button className="button-add -types" onClick={() => this.showModal('note')}>N</button>
          </div>
        </div>
    );
  }
}

export default ButtonAdd;
