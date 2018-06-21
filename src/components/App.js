import React from 'react';
import TableContent from './Table';
import ModalCom from './Modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
    };
    this.addJSON = this.addJSON.bind(this);
    this.removeJSON = this.removeJSON.bind(this);
  }

  componentWillMount(){
    axios.get('http://localhost:3000/UsersData.json').then( res => {
        this.setState({ userData: res.data });
    });
  }

  addJSON(event){
    let new_number = this.state.userData[this.state.userData.length - 1];
    const data = ({ id: new_number.id+1 , ...event  });
    this.setState({ userData:  this.state.userData.concat([ data ])  });
  }

  removeJSON(event){
      const updatedData = this.state.userData.filter(function(e){ return e.id !== event});
      this.setState({ userData: updatedData })
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>React C.R.U.D Bootstrap</h1>
        </div>

        <div>
          <ModalCom
            addJSON={this.addJSON}
          />
        </div>

        <div className="tableStyle">
          <TableContent
            data={this.state.userData}
            removeJSON={this.removeJSON}
          />
        </div>

      </div>
    );
  }
}

export default App;
