import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const Team = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
      width:768px;
    flex-wrap:wrap;
    justify-content:center;
  }
`;

const TeamTitle = styled.div`
  font-family: Nunito;
  font-weight: bold;
  font-size: 36px;
  line-height: 43.2px;
  text-align: center;
  color: #918fb3;

`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const Equipe = () => {
  return (
    <div>
      <TeamTitle>A equipe</TeamTitle>
      <Team>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>João Pereira, 30</Card.Title>
              <Card.Text>Desenvolvedor</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Branca Silva, 33 </Card.Title>
              <Card.Text>Analista de Qualidade</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Carlos Gomes, 46</Card.Title>
              <Card.Text>Desenvolvedor Fullstack</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: "18rem", height: "398px" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Diogo Fraga, 30</Card.Title>
              <Card.Text>
                Gestor de Inovação
                <br />
                Líder técnico
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "398px" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Augusto Costa, 24 </Card.Title>
              <Card.Text>Desenvolvedor Frontend</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Bia Ferreira, 28</Card.Title>
              <Card.Text>Designer de Interface</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Marco Dias, 41</Card.Title>
              <Card.Text>Desenvolvedor Backend</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Cristiano Souza, 21</Card.Title>
              <Card.Text>Analista de Qualidade</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Michael Bravo, 34</Card.Title>
              <Card.Text>Desenvolvedor Backend</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Miguel Silva, 32</Card.Title>
              <Card.Text>Desenvolvedor Backend</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.picsum.photos/id/177/180/100.jpg"
            />
            <Card.Body>
              <Card.Title>Bruno Lima, 36</Card.Title>
              <Card.Text>Designer de Interface</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Team>
    </div>
  );
};

export default Equipe;
