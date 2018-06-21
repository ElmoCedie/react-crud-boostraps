import React from 'react';
import TableContent from './Table';
import ModalCom from './Modal';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: [],
    };
  }

  componentWillMount(){
    axios.get('http://localhost:3000/UsersData.json').then( res => {
        this.setState({ userData: res.data });
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>React C.R.U.D Bootstrap</h1>
        </div>

        <div>
          <ModalCom  />
        </div>

        <div className="tableStyle">
          <TableContent data={this.state.userData}/>
        </div>
      </div>
    );
  }
}

export default App;
