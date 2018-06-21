import React from 'react';
import { Table, Button } from 'react-bootstrap';

class TableContent extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><Button bsStyle="info">Update</Button></td>
            <td><Button bsStyle="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button bsStyle="info">Update</Button></td>
            <td><Button bsStyle="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td><Button bsStyle="info">Update</Button></td>
            <td><Button bsStyle="danger">Delete</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}


export default TableContent;
