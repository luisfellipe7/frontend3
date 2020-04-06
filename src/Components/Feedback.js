import React from 'react'
import styled from 'styled-components'
import imgfeed from "../assets/img2.png";

const FeedbackBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 100px;
`;

const FeedbackIMG = styled.img`
  width: 100%;
`;

const TextoFeed = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 326px;
`;

const TextoTitle = styled.div`
  font-family: Nunito;
  font-weight: bold;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #666;
`;

const TextoBody = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 32px;
  line-height: 38.4px;
  text-align: right;
  color: #666;
`;

const FeedSub = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
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
  font-size: 32px;
  line-height: 38.4px;
  text-align: right;
  color: #666;
  opacity: 0.58;
`;

const EmailButton = styled.button`
  width: 125px;
  height: 67px;
  background: #9d65a4;
  border: 1px solid #b7b7b7;
`;

const Feedback = () => {
    return(
        <FeedbackBody>
        <FeedbackIMG src={imgfeed} />
        <TextoFeed>
          <TextoTitle>Quer um Feedback?</TextoTitle>
          <TextoBody>
            Preencha seu email abaixo para receber o feedback da sua
            avaliação.
            <br />
            Estamos torcendo por você!
          </TextoBody>
          <FeedSub>
            <EmailFeed placeholder="Digite seu email aqui..." />
            <EmailButton />
          </FeedSub>
        </TextoFeed>
      </FeedbackBody>
    )
}

export default Feedback