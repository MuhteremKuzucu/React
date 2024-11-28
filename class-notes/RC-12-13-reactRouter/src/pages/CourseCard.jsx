import React from 'react'
import data from "../data"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CourseCard = () => {

  const navigasyon=useNavigate()

  return (
    <Container>
      <Row>
        {data.map((a) => (
          <Col sm={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={a.img} />
              <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text>{a.text}</Card.Text>
                <Button
                 onClick={()=>navigasyon(`/courses/${a.name}`)}
                 variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CourseCard
