import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import Moment from 'moment'

const ToDoListDate = (props) => {
	const removeToDo = (e) =>  {
    props.pr.removeToDo(e.target.id);
    
  }
  const filtered = props.pr.toDo.filter((it) => it.date ===  props.dt )
	return (
		<>
		{
      
			filtered.length > 0 && 
			<h1>{props.msg} {props.dt}</h1>
		}
    <Row xs={2} md={2} className="g-4">
      {filtered.map((it, index) => (
        <Col key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{it.title}</Card.Title>
              <Card.Text>
                {it.desc} {it.date}
              </Card.Text>
              <Button id={index} onClick={(e) => removeToDo(e)} variant="primary">
                Finalizar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
		</>
  );
}

export class ToDoListRenderer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
				<ToDoListDate  pr={this.props.todo} msg="De otras fechas" dt={Moment().subtract(1, 'days').format('YYYY-MM-DD') } />
				<ToDoListDate  pr={this.props.todo} msg="Pendientes de ayer" dt={Moment().subtract(1, 'days').format('YYYY-MM-DD') }/>
        <ToDoListDate  pr={this.props.todo} msg="Pendientes para hoy" dt={ Moment().format('YYYY-MM-DD')}/>
				{
					this.props.todo.toDo.length === 0 && 
					<h1>No hay pendientes</h1>
				}
      </Container>
    );
  }
}
