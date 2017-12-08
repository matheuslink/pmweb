import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './ContactModal.less';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      message: '',
      date: '',
    };

    this.close = this.close.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  close() {
    this.props.close();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.close} className="contact-modal">
      <Modal.Header closeButton>
        <Modal.Title>Entre em contato</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex">
          <FormGroup>
            <ControlLabel>Nome *</ControlLabel>
            <FormControl type="text" name="name" value={this.state.name} onChange={this.onChange} />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Email *</ControlLabel>
            <FormControl type="email" name="email" value={this.state.email} onChange={this.onChange}/>
          </FormGroup>
        </div>

        <FormGroup>
          <ControlLabel>Mensagem *</ControlLabel>
          <FormControl componentClass="textarea" style={{ height: 100, borderRadius: '20px', }} value={this.state.message} onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Data de nascimento *</ControlLabel>
          <FormControl type="date" name="date" value={this.state.date} onChange={this.onChange}/>
        </FormGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.close}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

ContactModal.propTypes = {
  showModal: PropTypes.bool,
  close: PropTypes.func,
}

export default ContactModal; 