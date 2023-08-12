import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom"

export default function ManagePost() {

    const [postInfo, setPostInfo] = useState([])
    const BaseURL = import.meta.env.VITE_API_URL
    const { user } = useContext(UserContext)
    const { id, name } = user
    const [availability, setAvailability] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`${BaseURL}/posts/edit/${id}`)
        promise.then(res => {
            setPostInfo(res.data)
        })
        promise.catch(err => {
            console.log(err.message)
        })
    }, [])

    function saveChanges() {
        postInfo.forEach((p) => {
            const body = {
                id: p.id,
                available: availability[p.id] || false
            };

            const promise = axios.put(`${BaseURL}/posts/edit`, body);
            promise.then(res => {
                console.log(`Post ${p.id} atualizado`);
            });
            promise.catch(err => {
                console.log(`Erro ao atualizar post ${p.id}:`, err.message);
            });
            navigate('/home')
        });
    }



    return (
        <>
            <HomeContainer>
                <TransactionsContainer>
                    <h1> DOGSTAR </h1>
                    <h1>Olá, {user.name}</h1>

                    {postInfo.map((p) => (
                        <ListItemContainer key={p.id}>
                            <div>
                                <img src={p.image} alt='' />
                                <p>Nome: {p.name_dog} </p>
                                <p>Talentos: {p.description}</p>
                                <label>
                                    Disponível:
                                    <input
                                        type="checkbox"
                                        checked={availability[p.id] || false}
                                        onChange={(e) => {
                                            setAvailability({
                                                ...availability,
                                                [p.id]: e.target.checked
                                            });
                                        }}
                                    />
                                </label>
                            </div>

                        </ListItemContainer>
                    ))}
                    <BotaoADD onClick={saveChanges}>
                        <p>Salvar alterações</p>
                    </BotaoADD>
                   
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
  cursor: pointer;
`

export const BotaoADD = styled.div`
    background-color: white;
    width: 180px;
    height: 30px;
    cursor: pointer;
`