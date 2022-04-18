import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";

export class ToDoListRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.removeToDo = this.removeToDo.bind(this);
  }

  removeToDo(e) {
    this.props.todo.removeToDo(e.target.id);
  }

  render() {
    return (
      <Container>
        <Row xs={2} md={2} className="g-4">
          {this.props.todo.toDo.map((it, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{it.title}</Card.Title>
                  <Card.Text>{it.desc}</Card.Text>
                  <Button
                    id={index}
                    onClick={this.removeToDo}
                    variant="primary"
                  >
                    Finalizar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
