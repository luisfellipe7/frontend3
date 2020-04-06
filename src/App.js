import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left:150px;
  margin-right:150px;
  margin-top:21px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size:32px;
  font-weight:bold;
  font-family:Nunito;
`;

const Menu = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top:10px;
`;

const Items = styled.div`
display:flex;
margin-right: 30px;
font-size:24px;
font-family:Lato;
font-weight:regular;
justify-content:center;
`

const App = () => {
  return (
    <div>
      <Header>
        <Logo>TesteInovação</Logo>
        <Menu>
          <Items>O desafio</Items>
          <Items>Recomendaçoes</Items>
          <Items>Feedback</Items>
          <Items>A equipe</Items>
          <Items>Comentários</Items>
        </Menu>
      </Header>
    </div>
  );
};

export default App;
