import React from 'react'
import styled from 'styled-components'

const Teste = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const TesteTexto = styled.div`
width:600px;
  font-family: Lato;
  font-weight: normal;
  font-size: 32px;
  line-height: 38.4px;
  text-align: left;
  color: #666;
`;
const Inputs = styled.div`
display:flex;
flex-direction:column;
`

const Nome = styled.input`
display:flex;
width: 330px;
height: 56px;
border-radius: 8px;
background: #fff;
border: 1px solid #b7b7b7;
margin-right:15px;
`

const Sobrenome = styled.input`
display:flex;
width: 330px;
height: 56px;
border-radius: 8px;
background: #fff;
border: 1px solid #b7b7b7;
`

const Comentarios = styled.input`
display:flex;
width: 690px;
height: 199px;
border-radius: 8px;
background: #fff;
border: 1px solid #b7b7b7;
`

const Enviar = styled.button`
display:flex;
width: 330px;
height: 63px;
border-radius: 8px;
background: #9d65a4;
font-family: Lato;
font-weight: 900;
font-size: 32px;
line-height: 38.4px;
text-align: left;
color: #fff;
text-align:center;
`

const Gostou = () => {
    return(
        <Teste>
        <TesteTexto>
          <b>Gostou do teste?</b>
          <br />
          <br />
          Conte para nós o que você gostou no teste e o que você mudaria para
          melhor avaliar um candidato à essa vaga.
          <br />
          Sua opinião é importante para nós, queremos os melhores no nosso
          time.
        </TesteTexto>
        <Inputs>
        <Nome placeholder="Nome" /> <Sobrenome placeholder="Sobrenome" />
        <br />
        <Comentarios placeholder="Comentários" />
        <Enviar>Enviar</Enviar>
        </Inputs>
      </Teste>
    )
}
export default Gostou