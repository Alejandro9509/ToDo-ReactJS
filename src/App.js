
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.scss';
import FormRenderer from './components/FormRenderer'
import React from 'react';
import {connect, Provider} from 'react-redux'
import {mapStateToProps, mapDispatchToProps, store} from './storage/toDo'

class AppRender extends React.Component {
  constructor(props) {
    super (props)

  }
  render(){
    return (
      <FormRenderer  reducers={this.props} />
    )
  }
}

class App extends React.Component {
  
  render(){
    return (
      <Provider store={store}>
        <Container /> 
      </Provider>
    );
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(AppRender)
export default App;
