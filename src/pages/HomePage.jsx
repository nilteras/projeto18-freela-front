import styled from 'styled-components'
import apolo from './../../public/assets/apolo.png'

export default function HomePage() {
    return (
        <>
            <HomeContainer>
                <TransactionsContainer>
                    <h1> DOGSTAR </h1>
                  
                    <ListItemContainer>
                        <div>
                            <img src={apolo} alt='' />
                            <p>Nome: Apolo </p>
                            <p>Talentos: O cachorro perfeito, corredor, nadador, parceiro</p>
                        </div>
                    </ListItemContainer>
                </TransactionsContainer>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: gray;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div p {
    color: #c6c6c6;
    font-size: 22px;
    margin-right: 10px;
  }
  img {
    width: 60px;
    height: 60px;
  }
`