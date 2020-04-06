import React from 'react'
import styled from 'styled-components'

const BodyBG = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #918fb3;
  width: 100%;
`;

const Text = styled.div`
  font-size: 36px;
  font-family: Nunito;
  color: white;
  display: flex;
  margin: 100px;
`;

const Card = styled.div`
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
  margin: 0px 0px 150px 0px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardNumber = styled.div`
  border: 1px solid white;
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
`;

const Info = () => {
return(
    <BodyBG>
    <Text>Recomendaçoes: </Text>
    <Card>
      <CardHeader>
        <CardNumber>1</CardNumber>
        <CardTitle>Organize seu tempo</CardTitle>
      </CardHeader>
      <CardText>
        Verifique quanto tempo você tem disponível para realizar o teste
        com eficiênciae então crie pequenas metas para manter o ritmo.
      </CardText>
    </Card>
  </BodyBG>
)
}

export default Info