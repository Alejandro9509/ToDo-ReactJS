import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form , Button, Container , Col, Row} from 'react-bootstrap'


class FormRenderer extends React.Component {
    constructor(props) {
        super(props)

    }
    render () {
        return (
            <Container>
              <Row>
                <div>Hola</div>
              </Row>
              <Row>
                <Col>
                  <div>
                    <Form>
                      <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Titulo de la tarea</Form.Label>
                        <Form.Control type="text" placeholder="Titulo...." />
                      </Form.Group>
                      <Form.Group controlId="description">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows="3" name="address" autoComplete='0' placeholder='Descripcion de la tarea' />
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col>
                  <Button type="submit">Añadir</Button>
                </Col>
              </Row>
            </Container>
        )
    }
}

export default FormRenderer