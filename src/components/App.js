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
    this.addJSON = this.addJSON.bind(this);
    this.removeJSON = this.removeJSON.bind(this);
    this.updateJSON = this.updateJSON.bind(this);
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
      const updatedData = this.state.userData.filter( (e) => { return e.id !== event } );
      this.setState({ userData: updatedData })
  }

  updateJSON(event){
      const data = event;
      const OldData = this.state.userData;
      const objIndex = OldData.findIndex( obj =>  obj.id === data.id  );
      const updatedProjects = [
        ...OldData.slice(0,objIndex),
        data ,
        ...OldData.slice(objIndex + 1, OldData.length)
      ];

      this.setState({ userData: updatedProjects })
  }

  render() {
    return (
      <div>
        {/* Header  */}
        <div id="header">
          <h1>React C.R.U.D Bootstrap</h1>
        </div>

        {/* Modal  */}
        <div>
          <ModalCom
            addJSON={this.addJSON}
          />
        </div>

        {/* Table Content Render  */}
        <div className="tableStyle">
          <TableContent
            data={this.state.userData}
            removeJSON={this.removeJSON}
            updateJSON={this.updateJSON}
          />
        </div>

      </div>
    );
  }
}

export default App;
