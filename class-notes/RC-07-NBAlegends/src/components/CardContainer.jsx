import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [arama, setArama] = useState("");

  //!1.yontem search islemi yaptýrmak icin
  // let filtrelenmisData=data.filter((d)=>d.name.includes(arama))

  return (
    <div>
      <Form.Control
        placeholder="Search Player.."
        className="w-50 m-auto"
        onChange={(e) => setArama(e.target.value)}
      />
      <Container className="my-2 kartContainer">
        <Row >
          {data
            .filter((d) => d.name.toLowerCase().includes(arama.toLowerCase()))
            .map((player) => (
              <Col xs={12} md={6} lg={3} className="my-2 m-auto" key={player.name}>
                <PlayerCard {...player} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
