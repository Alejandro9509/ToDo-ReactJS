import React from "react";
import {Card, Col, Row} from 'react-bootstrap'


export class ToDoListRenderer extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Row xs={2} md={2} className="g-4">
                {
                    this.props.list.map((it, index) => 
                        <Col key={index}>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{it.title}</Card.Title>
                                    <Card.Text>
                                        {it.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        )
    }
}