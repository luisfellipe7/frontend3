import React from "react";
import styled from "styled-components";

const Teste = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding-left:40%;
  }
  @media (max-width:425px) {
      align-items:center;
      padding-left:20%;
      width:100%;
  }
`;
const TesteTexto = styled.div`
  display: flex;
  width: 600px;
  font-family: Lato;
  font-weight: normal;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #666;
  margin-right: 35px;
  @media (max-width: 1024px) {
    padding-left:25px;
    flex-direction:column; 
  }
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 22px;
    justify-content: center;
    text-align: center;
    justify-content: center;
    align-self: center;
  }
  @media (max-width:425px) {
    flex-direction: column;
    font-size: 14px;
    justify-content: center;
    text-align: center;
    justify-content: center;
    align-self: center;
    word-wrap: break-word;
    padding-left:100px;
}
@media (max-width: 320px) {
    padding-left:55%;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width:425px){
      padding-left:10%;
  }
  @media (max-width:375px){
    padding-left:30%;
}
`;
const NameInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media (max-width: 425px) {
    margin-bottom: 0px;
  }
`;

const Nome = styled.input`
  display: flex;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #b7b7b7;
  margin-right: 15px;
  @media (max-width: 768px) {
    width: 220px;
  }
  @media (max-width: 425px) {
    width: 160px;
    height:35px;
  }
`;

const Sobrenome = styled.input`
  display: flex;
  width: 330px;
  height: 56px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #b7b7b7;
  @media (max-width: 768px) {
    width: 220px;
  }
  @media (max-width: 425px) {
    width: 160px;
    height:35px;
  }
`;

const Comentarios = styled.input`
  display: flex;
  width: 680px;
  height: 199px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #b7b7b7;
  @media (max-width: 768px) {
    width: 455px;
    justify-content: center;
    align-self: center;
  }
  @media (max-width: 425px) {
    width: 335px;
  }
`;

const Enviar = styled.button`
  display: flex;
  width: 250px;
  height: 63px;
  border-radius: 8px;
  background: #9d65a4;
  font-family: Lato;
  font-weight: 900;
  font-size: 26px;
  line-height: 38.4px;
  text-align: left;
  color: #fff;
  text-align: center;
  align-self: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 55px;
  }
`;

const Gostou = () => {
  return (
    <Teste>
      <TesteTexto>
        <b>Gostou do teste?</b>
        Conte para nós o que você gostou no teste e o que você mudaria para
        melhor avaliar um candidato à essa vaga.
        <br />
        Sua opinião é importante para nós, queremos os melhores no nosso time.
      </TesteTexto>
      <Inputs>
        <NameInputs>
          <Nome placeholder="Nome" /> <Sobrenome placeholder="Sobrenome" />
        </NameInputs>
        <br />
        <Comentarios placeholder="Comentários" />
        <Enviar>ENVIAR</Enviar>
      </Inputs>
    </Teste>
  );
};
export default Gostou;
