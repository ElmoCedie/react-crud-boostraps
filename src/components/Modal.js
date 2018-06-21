import React from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class ModalCom extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      first_name: '',
      last_name: '',
      email: '',
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit() {
    const { first_name, last_name, email } = this.state;
    this.props.addJSON({ first_name, last_name, email });
    this.setState({ show: false });
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="inputlbl">
                <h5>First name:</h5>
                <input type="text" name="firstname" onChange={ (e) => {this.setState({first_name: e.target.value})} } />
              </div>

              <div className="inputlbl">
                <h5>Last name:</h5>
                <input type="text" name="lastname" onChange={ (e) => {this.setState({last_name: e.target.value})} } />
              </div>

              <div className="inputlbl">
                <h5>Email:</h5>
                <input type="text" name="email" onChange={ (e) => {this.setState({email: e.target.value})} } />
              </div>

              <Button onClick={this.handleSubmit} bsStyle="primary" bsSize="large">submit</Button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalCom;
