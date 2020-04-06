import React from "react";
import styled from "styled-components";
import pinterest from '../assets/pinterest.png'
import twitter from '../assets/twitter.png'
import skype from '../assets/skype.png'
import youtube from '../assets/youtube.png'

const FooterBG = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height: 500px;
  background: #685c82;
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 820px;
`;

const FimTexto = styled.div`
  font-family: Nunito;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #fff;
`;

const Icones =styled.div`
display:flex;
flex-direction: row;
justify-content:center;
`
const Img = styled.img`
display:flex;
width:37px;
height:37px;
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
