import React from "react";
import styled from "styled-components";
import imgfeed from "../assets/img2.png";

const FeedbackBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
  @media (max-width: 768px) {
    padding-left:15%;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-left: 10px;
  }
`;

const FeedbackIMG = styled.img`
  width: 100%;
  height: 500px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TextoFeed = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
  justify-content: center;
`;

const TextoTitle = styled.div`
  font-family: Nunito;
  font-weight: bold;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #666;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const TextoBody = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #666;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 425px) {
    word-wrap: break-word;
    font-size: 18px;
  }
`;

const FeedSub = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    padding-left:10%;
  }
  @media (max-width: 425px) {
      margin-top:30px;
    flex-direction:column;
    align-items:center;
  }
`;

const EmailFeed = styled.input`
  width: 390px;
  height: 47px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #b7b7b7;
  font-family: Lato;
  font-weight: normal;
  font-style: italic;
  font-size: 26px;
  line-height: 38.4px;
  text-align: center;
  color: #666;
  opacity: 0.58;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const EmailButton = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 8px;
  background: #9d65a4;
  position: relative;
  border: 1px solid #b7b7b7;
  font-family: Lato;
  font-weight: 900;
  font-size: 22px;
  line-height: 38.4px;
  text-align: center;
  color: #fefefe;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    margin-top:10px;
  }

`;

const Feedback = () => {
  return (
    <FeedbackBody>
      <FeedbackIMG src={imgfeed} />
      <TextoFeed>
        <TextoTitle>Quer um Feedback?</TextoTitle>
        <TextoBody>
          Preencha seu email abaixo para receber o feedback da sua avaliação.
          <br />
          Estamos torcendo por você!
        </TextoBody>
        <FeedSub>
          <EmailFeed placeholder="Digite seu email aqui..." />
          <EmailButton>ENVIAR</EmailButton>
        </FeedSub>
      </TextoFeed>
    </FeedbackBody>
  );
};

export default Feedback;
