import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form , Button, Container , Col, Row} from 'react-bootstrap'
import {ToDoListRenderer} from './ToDoListRenderer'


class FormRenderer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '', 
        description: ''
      }
      this.updateSubmit = this.updateSubmit.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)
      this.handleDescChange = this.handleDescChange.bind(this)
    }
    handleTitleChange(e) {
      this.setState({
        title: e.target.value
      })
    }
    handleDescChange(e) {
      this.setState({
        description: e.target.value
      })
    }
    updateSubmit(event){
      event.preventDefault()
      this.props.reducers.addToDo({title: this.state.title, desc: this.state.description})
      
    }
    render () {
      return (
        <Container>
            <ToDoListRenderer todo={this.props.reducers} />
            <Row>
              <Col>
                <div>
                  <Form onSubmit={this.updateSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                      <Form.Label>Titulo de la tarea</Form.Label>
                      <Form.Control onChange={this.handleTitleChange} type="text" placeholder="Titulo...." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Descripcion</Form.Label>
                      <Form.Control onChange={this.handleDescChange} as="textarea" rows="3" name="address" autoComplete='0' placeholder='Descripcion de la tarea' />
                    </Form.Group>
                    <Form.Group> 
                       <Button type="submit">Añadir</Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
        </Container>
        )
    }
}

export default FormRenderer