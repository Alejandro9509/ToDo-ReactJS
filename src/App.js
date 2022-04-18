import logo from './logo.svg';

import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.scss';
import FormRenderer from './components/FormRenderer'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <>
        <FormRenderer  />
      </>
    );
  }
}

export default App;
