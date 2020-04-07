import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

const BodyBG = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #918fb3;
  width: 100%;
  height: 500px;
  @media (max-width: 1024px) {
    width: 138%;
  }
  @media (max-width: 320px) {
    width: 158%;
  }
`;

const Text = styled.div`
  font-size: 36px;
  font-family: Nunito;
  color: white;
  display: flex;
  margin: 30px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction:column;
    align-self:center;
  }
  @media(max-width:425px) {
    display:none;
`;

const CardTotal = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 500px;
  border: 1px solid white;
  font-size: 32px;
  font-family: Lato;
  color: white;
  justify-content: center;
  text-align: center;
  margin: 0px 60px 150px 0px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 425px) {
    height: 200px;
    width: 300px;
    margin: 10px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardNumber = styled.div`
  border: 1px solid white;
  border-left: 0px;
  border-top: 0px;
  width: 67px;
  height: 67px;
`;

const CardTitle = styled.div`
  height: 67px;
  width: 500px;
  border-bottom: 1px solid white;
`;

const CardText = styled.div`
  height: 300px;
  width: 500px;
  @media (max-width: 425px) {
    word-wrap: break-word;
  }
`;

const TextoMobile = styled.div`
display:none;
@media (max-width: 425px){
display:flex;
text-align:left;
padding-left:15px;
  font-size: 16px;
  font-family: Lato;
  color: white;
  word-wrap: break-word;
}
`;

const Info = () => {
  return (
    <BodyBG>
      <Text>Recomendaçoes: </Text>
      <Card>
        <Carousel>
          <Carousel.Item>
            <CardTotal>
              <CardHeader>
                <CardNumber>1</CardNumber>
                <CardTitle>Organize seu tempo</CardTitle>
              </CardHeader>
              <CardText>
                Verifique quanto tempo você tem disponível para realizar o teste
                com eficiênciae então crie pequenas metas para manter o ritmo.
              </CardText>
            </CardTotal>
          </Carousel.Item>
          <Carousel.Item>
            <CardTotal>
              <CardHeader>
                <CardNumber>2</CardNumber>
                <CardTitle>Tire suas dúvidas</CardTitle>
              </CardHeader>
              <CardText>
                Se houver alguma dúvida, procure o aplicador do teste, assim
                você terá melhores chances de entregar o que foi proposto.
              </CardText>
            </CardTotal>
          </Carousel.Item>
          <Carousel.Item>
            <CardTotal>
              <CardHeader>
                <CardNumber>3</CardNumber>
                <CardTitle>Seja criativo</CardTitle>
              </CardHeader>
              <CardText>
                Existem várias formas de resolver uma questão de html e css ou
                java script, mostre que você domina a melhor.
              </CardText>
            </CardTotal>
          </Carousel.Item>
        </Carousel>
      </Card>
      <TextoMobile>
        1. Organize seu tempo
        <br />
        Verifique quanto tempo você tem disponível para realizar o teste com
        eficiênciae então crie pequenas metas para manter o ritmo.
        <br />
      </TextoMobile>
      <br />
      <TextoMobile>
        2. Tire suas duvidas
        <br />
        Se houver alguma dúvida, procure o aplicador do teste, assim você terá
        melhores chances de entregar o que foi proposto.
        <br />
      </TextoMobile>
      <br />
      <TextoMobile>
        3. Seja criativo
        <br />
        Existem várias formas de resolver uma questão de html e css ou java
        script, mostre que você domina a melhor.
      </TextoMobile>
    </BodyBG>
  );
};

export default Info;
