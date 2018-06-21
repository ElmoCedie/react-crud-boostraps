import React from 'react';
import TableContent from './Table';
import ModalCom from './Modal';

import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
      return (
        <div>

          <ModalCom  />

          <TableContent />

        </div>
      );
    }
  }

export default App;
