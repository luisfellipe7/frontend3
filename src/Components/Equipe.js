import React from 'react'
import styled from 'styled-components'


const Team = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TeamTitle = styled.div`
  font-family: Nunito;
  font-weight: bold;
  font-size: 36px;
  line-height: 43.2px;
  text-align: center;
  color: #918fb3;
`;

const TeamCard = styled.div`
  display: flex;
  width: 330px;
  height: 316px;
  background: #e9f1f2;
  margin-bottom: 24px;
  margin-left: 24px;
  margin-top: 32px;
  border: 1px solid #b7b7b7;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamCard2 = styled.div`
  display: flex;
  width: 330px;
  height: 427px;
  background: #e9f1f2;
  margin-bottom: 24px;
  margin-left: 24px;
  margin-top: 32px;
  border: 1px solid #b7b7b7;
`;

const TeamCard3 = styled.div`
  display: flex;
  width: 330px;
  height: 228px;
  background: #e9f1f2;
  margin-bottom: 24px;
  margin-left: 24px;
  margin-top: 32px;
  border: 1px solid #b7b7b7;
`;

const CardTeamTitle = styled.div`
  display: flex;
  font-family: Nunito;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  color: #666;
`;

const CardSubtitle = styled.div`
  display: flex;
  font-family: Nunito-Italic;
  font-weight: normal;
  font-size: 28px;
  line-height: 33.6px;
  text-align: left;
  color: #666;
`;

const Equipe = () => {
    return(
        <div>
<TeamTitle>A equipe</TeamTitle>
        <Team>
          <Row>
            <TeamCard>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard>
            <TeamCard>
              <CardTeamTitle>Branca Silva, 33</CardTeamTitle>
              <CardSubtitle>Analista de qualidade</CardSubtitle>
            </TeamCard>
            <TeamCard>
              <CardTeamTitle>Carlos Gomes, 46 </CardTeamTitle>
              <CardSubtitle>Desenvolvedor Fullstack</CardSubtitle>
            </TeamCard>
          </Row>
          <Row>
            <TeamCard2>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard2>
            <TeamCard2>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard2>
          </Row>
          <Row>
            <TeamCard3>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard3>
            <TeamCard2>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard2>
            <TeamCard2>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard2>
          </Row>
          <Row>
            <TeamCard>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard>
            <TeamCard2>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard2>
            <TeamCard3>
              <CardTeamTitle>João Pereira, 30</CardTeamTitle>
              <CardSubtitle>Desenvolvedor</CardSubtitle>
            </TeamCard3>
          </Row>
        </Team>
        </div>
    )
}

export default Equipe