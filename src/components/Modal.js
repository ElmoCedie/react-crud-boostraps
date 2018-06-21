import React from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


class ModalCom extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Please enter all fields</ControlLabel>
                <br/>

                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter First Name"
                />
                <br/>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter Last Name"
                />
                <br/>

                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter Email"
                />


              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="success">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalCom;
