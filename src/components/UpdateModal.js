import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: this.props.data.id,
      first_name: this.props.data.first_name,
      last_name: this.props.data.last_name,
      email: this.props.data.email,
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
    const { id, first_name, last_name, email } = this.state;
    this.props.updateJSON({ id, first_name, last_name, email });
    this.setState({ show: false });
  }

  render() {

    return (
      <div>
        <Button bsStyle="info" onClick={this.handleShow}>
          Update
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="inputlbl">
                <h5>First name:</h5>
                <input type="text" name="firstname" value={this.state.first_name} onChange={ (e) => {this.setState({first_name: e.target.value})} } />
              </div>

              <div className="inputlbl">
                <h5>Last name:</h5>
                <input type="text" name="lastname" value={this.state.last_name} onChange={ (e) => {this.setState({last_name: e.target.value})} } />
              </div>

              <div className="inputlbl">
                <h5>Email:</h5>
                <input type="text" name="email" value={this.state.email} onChange={ (e) => {this.setState({email: e.target.value})} } />
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

export default UpdateModal;
