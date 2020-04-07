import React from "react";
import styled from "styled-components";
import pinterest from '../assets/pinterest.png'
import twitter from '../assets/twitter.png'
import skype from '../assets/skype.png'
import youtube from '../assets/youtube.png'

const FooterBG = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  height: 500px;
  background: #685c82;
  @media (max-width: 1024px) {
    width: 138%;
  }
  @media (max-width: 320px) {
    width: 158%;
  }
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 820px;
  margin-right:50px;
  @media (max-width: 768px) {
    width:600px;
  }
`;

const FimTexto = styled.div`
  font-family: Nunito;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 18px;
    padding-left:20px
  }
`;

const Icones =styled.div`
display:flex;
flex-direction: row;
justify-content:center;
`
const Img = styled.img`
display:flex;
width:30px;
height:30px;
margin-right:10px;
`

const Footer = () => {
  return (
    <FooterBG>
      <Texto>
        <FimTexto><b>FIM DO TESTE</b></FimTexto>
        <br />
        <br />
        <FimTexto>
        <b>TesteInovação</b> é uma marca fictícia com a única finalidade de servir
          como material de estudo da equipe de inovação do Grupo Comunique-se.
        </FimTexto>
        <br /> 
        <br />
        <br />
        <FimTexto><b>IMPORTANTE:</b> Não compartilhe esse teste.</FimTexto>
      </Texto>
      <Icones>
        <Img src={pinterest} />
        <Img src={skype} />
        <Img src={twitter} />
        <Img src={youtube} />

      </Icones>
    </FooterBG>
  );
};

export default Footer;
