import { Link } from "react-router-dom";
import styled from 'styled-components'
import apolo from './../../public/assets/apolo.png'

export default function ItenInfo(){
    return (
        <>
        <HomeContainer>
            <img src={apolo} alt="" />
            <h1>Negão</h1>
            <p>O cão mais simpático do mundo</p>
            <p>Tutor: Fulano</p>
            <p>Telefone para serviços: 6199999999</p>

            <Link to={'/home'}>
                Voltar
            </Link>
        </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  img {
    width: 400px;
    height: 350px;
  }
`