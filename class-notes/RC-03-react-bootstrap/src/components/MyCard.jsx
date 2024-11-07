import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

const MyCard = ({veri}) => {



  return (
    <Row>
      {veri.map((a) => (
        <Col key={a.id} className='d-flex justify-content-center'>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={a.img} />
            <Card.Body>
              <Card.Title>{a.name}</Card.Title>
              <Card.Text>
                {a.text}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default MyCard