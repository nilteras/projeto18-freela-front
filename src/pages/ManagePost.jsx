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
                <MenuContainer>
                    <h1>Olá, {user.name}</h1>
                </MenuContainer>
                <ListContainer>


                    {postInfo.map((p) => (
                        <PostContainer key={p.id}>
                            <div>
                                <img src={p.image} alt='' />
                                <p>Nome: {p.name_dog} </p>
                                <p>Talentos: {p.description}</p>
                                <label>
                                    <h2>Disponível:</h2>
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

                        </PostContainer>
                    ))}


                </ListContainer>
                <button onClick={saveChanges}>
                    <p>Salvar alterações</p>
                </button>
                <button >
                    <Link to={'/home'}>
                        Voltar
                    </Link>
                </button>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
margin-top: 120px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  background-color: #fff;
button {
    margin-top: 5px;
}
`
const ListContainer = styled.div`
    width: calc(100% - 700px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 20px;
    padding: 10px;
  
    p {
        color: #1E5377;
        font-size: 18px;
    }
`
const PostContainer = styled.div`
    width: 200px;
    height: 210px;
    box-shadow: 2px 4px 6px 4px #0000001A;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;

    img {
        width: 130px;
        height: 130px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
    }
    h2 {
    
        color: #1E5377;
    }
  cursor: pointer;
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


export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #48B3FE;
    
`