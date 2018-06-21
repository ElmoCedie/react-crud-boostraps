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
  }

  componentWillMount(){
    axios.get('http://localhost:3000/UsersData.json').then( res => {
        this.setState({ userData: res.data });
    });
  }

  addJSON(event){
    let last_number = this.state.userData.length + 1;
    const data = ({ id: last_number, ...event  });
    this.setState({ userData:  this.state.userData.concat([ data ])  });
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
          <TableContent data={this.state.userData} />
        </div>

      </div>
    );
  }
}

export default App;
