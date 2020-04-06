import React from "react";
import Info from './Components/Info'
import Feedback from './Components/Feedback'
import Equipe from './Components/Equipe'
import Gostou from './Components/Gostou'
import Footer from './Components/Footer'
import styled from "styled-components";
import imgbg from "./assets/bg1.png";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 21px;
`;

const Strip = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoStrip1 = styled.div`
  width: 37px;
  height: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  background: #9d65a4;
`;

const LogoStrip2 = styled.div`
  width: 37px;
  height: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  background: #918fb3;
  margin-left: 8px;
`;

const LogoStrip3 = styled.div`
  width: 37px;
  height: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  background: #918fb3;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: Nunito;
  font-weight: bold;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #918fb3;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Items = styled.div`
  display: flex;
  margin-right: 30px;
  font-family: Lato;
  font-weight: normal;
  font-size: 24px;
  line-height: 28.8px;
  text-align: left;
  color: #666;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgBG = styled.div`
  background-image: url(${imgbg});
  width: 100%;
  height: 500px;
`;

const ImgText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-left: 30px;
`;

const ImgText1 = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 36px;
  line-height: 72px;
  text-align: left;
  color: #666;
`;

const ImgText2 = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 36px;
  margin-left: 90px;
  line-height: 72px;
  text-align: left;
  color: #666;
`;

const ImgText3 = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 48px;
  line-height: 72px;
  text-align: left;
  color: #666;
`;

const ImgText4 = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 60px;
  margin-left: 15px;
  line-height: 72px;
  text-align: left;
  color: #666;
`;

const App = () => {
  return (
    <div>
      <Header>
        <Logo>
          <Strip>
            <LogoStrip1 />
            <LogoStrip2 />
            <LogoStrip3 />
          </Strip>
          Teste<font color="#9D65A4">Inovação</font>
        </Logo>
        <Menu>
          <Items>O desafio</Items>
          <Items>Recomendaçoes</Items>
          <Items>Feedback</Items>
          <Items>A equipe</Items>
          <Items>Comentários</Items>
        </Menu>
      </Header>
      <Body>
        <ImgBG>
          <ImgText>
            <ImgText1>
              Criamos produtos <font color="#918FB3">incríveis</font>
            </ImgText1>
            <ImgText2>
              que vão <b>impactar</b> o mercado.
            </ImgText2>
            <ImgText3>
              <b>Você está pronto</b> para{" "}
            </ImgText3>
            <ImgText4>
              <b>fazer parte desse time?</b>
            </ImgText4>
          </ImgText>
        </ImgBG>
        <Info />
        <Feedback />
        <Equipe />
        <Gostou />
        <Footer />
      </Body>
    </div>
  );
};

export default App;
