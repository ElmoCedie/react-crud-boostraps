import React from 'react';
import { Table, Button } from 'react-bootstrap';

class TableContent extends React.Component {
  constructor() {
    super();
    this.tableContent = this.tableContent.bind(this);
  }

  tableContent(){
    let tableData = this.props.data;
    return tableData.map( tableData => {
      return (
        <tr key={tableData.id} >
          <td>{tableData.id}</td>
          <td>{tableData.first_name}</td>
          <td>{tableData.last_name}</td>
          <td>{tableData.email}</td>
          <td id={"updbtn"+tableData.id}><Button bsStyle="info">Update</Button></td>
          <td id={"delbtn"+tableData.id}><Button bsStyle="danger">Delete</Button></td>
        </tr>
      );
    })
  }

  render(){
    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.tableContent()}
        </tbody>
      </Table>
    );
  }
}


export default TableContent;
