import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { TokenContext } from '../context/TokenContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function HomePage() {

    const { user } = useContext(UserContext)
    const { token, setToken } = useContext(TokenContext)
    const navigate = useNavigate()
    const BaseURL = import.meta.env.VITE_API_URL
    const [postInfo, setPostInfo] = useState([])
    console.log(user)
    useEffect(() => {
        if (localStorage.getItem('token' === undefined)) {
            navigate("/")
            return
        }

        const promise = axios.get(`${BaseURL}/posts`, {
            headers:
                { Authorization: `Bearer ${token}` }
        })
        promise.then(res => {
            setPostInfo(res.data)
        })
        promise.catch(err => {
            console.log(err.message)
        })
    }, [])

    function infoPost(postData) {
        navigate(`/post/${postData.id}`, { state: postData })

    }


    return (
        <>
            <HomeContainer>
                <MenuContainer>
                    <button>
                        <h1>Olá, {user.name}</h1>
                    </button>

                    <button onClick={() => {
                        navigate(`/posts/edit/${user.id}`)
                    }}>
                        <p>Gerenciar posts</p>
                    </button>
                    <button onClick={() => {
                        navigate('/post-add')
                    }}>
                        <p>+ Adicionar um DogStar</p>
                    </button>

                </MenuContainer>
                <ListContainer>


                    {postInfo.map((p) => (
                        <PostContainer key={p.id} onClick={() => infoPost(p)}>
                            <div>
                                <img src={p.image} alt='' />
                                <p>Nome: {p.name_dog} </p>
                                <p>Talentos: {p.description}</p>
                                <p>Ver mais...</p>
                            </div>
                        </PostContainer>
                    ))}

                </ListContainer>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 40px;
    padding-top: 70px;
    background-color: white;
    height: 100% ;
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
    margin: 10px;

    img {
        width: 130px;
        height: 130px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  cursor: pointer;
`



export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    
`

